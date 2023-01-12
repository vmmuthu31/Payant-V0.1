import Web3 from "web3";
import { setGlobalState, getGlobalState, setAlert } from "../store/index";
import mumbai from "../pages/contracts/mumbai.json";
import contract from "../pages/contracts/Flow.json";
import { ethers } from "ethers";

const { ethereum } = window;
if (ethereum) {
  window.web3 = new Web3(ethereum);
  window.web3 = new Web3(window.web3.currentProvider);
}

//Contract
const CONTRACT_ADDRESS = "0x91a8eE434A0Be84fC92f1D195CC01603dc535c4c";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const ethContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

const getEtheriumContract = async () => {
  const connectedAccount = getGlobalState("connectedAccount");

  if (connectedAccount) {
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const Contract_Address = "0x91a8eE434A0Be84fC92f1D195CC01603dc535c4c";
    const contract = new web3.eth.Contract(contract.abi, Contract_Address);

    return contract;
  } else {
    return getGlobalState("contract");
  }
};
const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setGlobalState("connectedAccount", accounts[0]);
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
      setGlobalState("connectedAccount", accounts[0]);
      await isWallectConnected();
    });

    if (accounts.length) {
      setGlobalState("connectedAccount", accounts[0]);
    } else {
      alert("Please connect wallet.");
      console.log("No accounts found.");
    }
  } catch (error) {
    reportError(error);
  }
};

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    mumbai.flowContract,
    flow,
    signer
  );

  return transactionContract;
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

const getAllFlows = async () => {
  try {
    const contract = await getEtheriumContract();
    const flow = await contract.methods.flow().call();
    const transactions = await contract.methods.getAllTransactions().call();

    setGlobalState("flow", structuredFlow(flow));
    setGlobalState("transactions", structuredFlow(transactions));
  } catch (error) {
    reportError(error);
  }
};

const deposit = async ({ dispatchDeposit, fileHash, signedContext }) => {
  try {
    const CONTRACT_ADDRESS = "0x91a8eE434A0Be84fC92f1D195CC01603dc535c4c";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // console.log(provider);
    const Deposit = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
    const tokenId = await Deposit.flow(
      dispatchDeposit,
      fileHash,
      signedContext
    );
    console.log(tokenId);
    console.log("Success");
    return tokenId;
  } catch (error) {
    reportError(error);
  }
};

const reportError = (error) => {
  setAlert(JSON.stringify(error), "red");
  throw new Error("No ethereum object.");
};

export { getAllFlows, isWallectConnected, deposit };
