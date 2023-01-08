import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { arrayify, solidityKeccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { FlowFactory, ReserveToken18 } from "./contracts/Flow.json";
import {
  Flow,
  SignedContextStruct,
} from "./contracts/Flow.json";
import { assertError, basicDeploy, ONE } from "./contracts/Flow.json";
import { flowFactoryDeploy } from "./contracts/Flow.json";
import { assert } from "chai";
import { deployFlow } from "./contracts/Flow.json";

describe("Payant Deposit test", () => {
  let flowFactory: FlowFactory;
  let signers: SignerWithAddress[];
  let deployer: SignerWithAddress;
  let depositor: SignerWithAddress; // caller
  let withdrawer: SignerWithAddress; // caller
  let goodSigner: SignerWithAddress;
  let flowContract: Flow;
  let dispatchDeposit, dispatchWithdraw, dispatchCancel;

  let erc20: ReserveToken18;

  before(async () => {
    flowFactory = await flowFactoryDeploy();
    signers = await ethers.getSigners();
    deployer = signers[0];
    depositor = signers[1];
    withdrawer = signers[2];
    goodSigner = signers[3];

    erc20 = (await basicDeploy("ReserveToken18", {})) as ReserveToken18;
    await erc20.initialize();

    const deployment = await deployFlow(deployer, flowFactory);

    flowContract = deployment.flow;
    dispatchDeposit = deployment.deposit;
    dispatchWithdraw = deployment.withdraw;
    dispatchCancel = deployment.cancel;
  });

  it("Should deposit funds in flow contract", async () => {
    await erc20.transfer(depositor.address, ONE);
    await erc20.connect(depositor).approve(flowContract.address, ONE);

    const context = [
      1,
      depositor.address,
      withdrawer.address,
      ONE,
      erc20.address,
      Date.now(),
    ];
    const contextHash = solidityKeccak256(["uint256[]"], [context]);
    const signature = depositor.signMessage(arrayify(contextHash));

    const signedContext: SignedContextStruct[] = [
      {
        signature: signature,
        signer: depositor.address,
        context: context,
      },
    ];
    await flowContract
      .connect(depositor)
      .flow(dispatchDeposit, 1, signedContext);

    assert.deepEqual(await erc20.balanceOf(flowContract.address), ONE);
  });

  it("Should fail to deposit funds for same contract flow contract", async () => {
    const fileHash = 1;
    await erc20.transfer(depositor.address, ONE);
    await erc20.connect(depositor).approve(flowContract.address, ONE);

    const context = [
      fileHash, // duplicate id
      depositor.address,
      withdrawer.address,
      ONE,
      erc20.address,
      Date.now(),
    ];
    const contextHash = solidityKeccak256(["uint256[]"], [context]);
    const signature = depositor.signMessage(arrayify(contextHash));

    const signedContext: SignedContextStruct[] = [
      {
        signature: signature,
        signer: depositor.address,
        context: context,
      },
    ];
    await assertError(
      async () =>
        await flowContract
          .connect(depositor)
          .flow(dispatchDeposit, fileHash, signedContext),
      "",
      "Transaction didn't revert for same contract"
    );
  });

  it("Should fail to deposit zero amount", async () => {
    const context = [
      2,
      depositor.address,
      withdrawer.address,
      0,
      erc20.address,
      Date.now(),
    ];
    const contextHash = solidityKeccak256(["uint256[]"], [context]);
    const signature = depositor.signMessage(arrayify(contextHash));

    const signedContext: SignedContextStruct[] = [
      {
        signature: signature,
        signer: depositor.address,
        context: context,
      },
    ];

    await assertError(
      async () =>
        await flowContract
          .connect(depositor)
          .flow(dispatchDeposit, 2, signedContext),
      "",
      "Transaction didn't revert with zero amount"
    );
  });
});