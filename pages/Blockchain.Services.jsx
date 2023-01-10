import Web3 from "web3";
import { setGlobalState, getGlobalState, setAlert } from "../store/index";
import abi from "../pages/contracts/Flow.json";
import mumbai from "../pages/contracts/mumbai.json";

const { ethereum } = window;
window.web3 = new Web3(ethereum);
window.web3 = new Web3(window.web3.currentProvider);

const getEtheriumContract = async () => {
  const connectedAccount = getGlobalState("connectedAccount");

  if (connectedAccount) {
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const networkData = mumbai.networks[networkId];

    if (networkData) {
      const contract = new web3.eth.Contract(
        mumbai.flowContract,
        networkData.address
      );
      return contract;
    } else {
      return null;
    }
  } else {
    return getGlobalState("contract");
  }
};

const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0].toLowerCase());
  } catch (error) {
    reportError(error);
  }
};

const isWallectConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      setGlobalState("connectedAccount", accounts[0].toLowerCase());
      await isWallectConnected();
    });

    if (accounts.length) {
      setGlobalState("connectedAccount", accounts[0].toLowerCase());
    } else {
      alert("Please connect wallet.");
      console.log("No accounts found.");
    }
  } catch (error) {
    reportError(error);
  }
};

const structuredFlow = (flow) => {
  return flow
    .map((flows) => ({
      id: flows.id,
      depositor: flows.depositor.toLowerCase(),
      withdrawer: flows.withdrawer.toLowerCase(),
      file: flows.file,
      erc20: flows.erc20.toLowerCase(),
      date: flows.timestamp,
    }))
    .reverse();
};

const signers = ethers.getSigners();
deployer = signers[0];
depositor = signers[1];
withdrawer = signers[2];
goodSigner = signers[3];

const deployment = deployFlow(deployer, mumbai.flowFactory);
mumbai.flowContract = deployment.flow;
dispatchDeposit = deployment.deposit;
dispatchWithdraw = deployment.withdraw;
dispatchCancel = deployment.cancel;

const getAllFlows = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");

    const contract = await getEtheriumContract();
    const flows = await contract.methods.getAllFlows().call();
    const transactions = await contract.methods.getAllTransactions().call();

    setGlobalState("flow", structuredFlow(flows));
    setGlobalState("transactions", structuredFlow(transactions));
  } catch (error) {
    reportError(error);
  }
};

const deposit = async ({ file, depositor, withdrawer, price, erc }) => {
  try {
    amount = window.web3.utils.toWei(amount.toString(), "ether");
    const contract = await getEtheriumContract();
    const account = getGlobalState("connectedAccount");
    const depositprice = window.web3.utils.toWei("0", "ether");

    await contract.methods
      .flow(file, depositor, withdrawer, price, erc)
      .send({ from: account, value: depositprice });

    return true;
  } catch (error) {
    reportError(error);
  }
};

const reportError = (error) => {
  setAlert(JSON.stringify(error), "red");
  throw new Error("No ethereum object.");
};

export { getAllFlows, connectWallet, deposit, isWallectConnected };
