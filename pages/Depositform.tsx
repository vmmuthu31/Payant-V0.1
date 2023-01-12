import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios, * as others from "axios";
import { arrayify, Bytes, solidityKeccak256 } from "ethers/lib/utils";
import {
  setGlobalState,
  setAlert,
} from "../store";
import {  useAccount, useSignMessage } from "wagmi";
import { create } from "ipfs-http-client";
import { deposit } from "./Blockchain.Services";
import { FileUploader } from "react-drag-drop-files";
import { verifyMessage } from "ethers/lib/utils";
import BigNumber from 'bignumber.js';


const Depositform = () => {
  const notify = () => toast.success("New Client added!");
  const [fileHash, setFileHash] = useState("");
  const [signedContext, setSignedContext] = useState("");
  const { address} = useAccount();
  const [imgBase64, setImgBase64] = useState(null);
  const [file, setFile] = useState(null);

  const { data, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      const recoveredAddress = address;
    },
  });
  const handleChange = (file) => {
    setFile(file);
  };
  const resetForm = () => {
    setFileHash("");
    setSignedContext("");
    setImgBase64(null);
  };

  type SignedContextStruct = {
    signer: string;
    signature: Bytes;
    context: BigNumber[];
  };
  
  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFileHash(e.target.files[0]);
    };
  };

  const handleSubmission = async (e) => {
   
    // console.log("Deposit submission");
    e.preventDefault();
    if (!fileHash ) return;

    setGlobalState("modal", "scale-0");
    setGlobalState("loading", { show: true, msg: "Uploading data..." });

    const formData = new FormData();
    formData.append("file", fileHash);
    const metadata = JSON.stringify({
      keyvalues: {
        signature: signedContext,
      },
    });
    formData.append("pinataMetadata", metadata);
    const options = JSON.stringify({ cidVersion: 0 });
    formData.append("pinataOptions", options);

    try {
      console.log("file upload");
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            // Authorization: JWT
            pinata_api_key: "876f96d717a13c38c251",
            pinata_secret_api_key:
              "e8f069ef36868569842dc969b0288d321477816c11baff0e10a0a4888c32edb4",
          },
        }
      );
      // ** Completed Uploading to the Pinata and Got the Hash Value
      // const fileHash = res.data.IpfsHash;
      const fileHash = 1
      console.log(res.data.IpfsHash);
      const ONE = 1;
      const context = [
        "1",
        "0x0Ba3f9705314d145885BDdCaDB90f98BBD6C4BF1",
        "0xfE27A2142B09e666644Be3B250307cEA569D7Faa",
        ONE,
        "0xD6802016dca8a32C0087B20bfb3726bDfCd71463",
        "20",
      ];
      console.log(address)
      const signer = address
      // const depositor = "0x0Ba3f9705314d145885BDdCaDB90f98BBD6C4BF1";
      const contextHash = solidityKeccak256(["uint256[]"], [context]);
      const message = arrayify(contextHash);
      const signature = signMessage({ message });
      
      console.log(message);
      const signedContext: SignedContextStruct[] = [
        {
          signer: signer,
          signature: message,
          context: context,
        },
      ];
      
      // const metadataURI = `https://ipfs.io/ipfs/${created}`;
      const flow = await deposit({ fileHash, signedContext });
      // setFileHash(metadataURI);
      console.log(flow);
    } catch (error) {
      console.log(error);
      setAlert("loading", { show: false });
    }
  };
  return (
    <>
      <Head>
        <title>Payant/Client</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold  leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Add Client
              </p>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block">
                    <span className="sr-only">Upload file</span>
                    <input
                      type="file"
                      className=""
                      onChange={changeImage}
                      required
                    />
                  </label>{" "}
                </div>
                <div className="">
                  <input
                    className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#F4F4F4] focus:border-[#F4F4F4] block w-full p-2.5"
                    type="text"
                    name="title"
                    placeholder="Dispatch Deposit"
                   
                    required
                  />
                </div>
                <div className="">
                  <textarea
                    className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#F4F4F4] focus:border-[#F4F4F4] block w-full p-2.5"
                    name="description"
                    placeholder="Signed Context"
                    // onChange={(e) => setSignedContext(e.target.value)}
                    // value={signedContext}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmission}
                  className="w-full mt-4 text-[#4E00E4]  hover:bg-primary-700 focus:ring-4  focus:ring-primary-300 font-medium border-[#4E00E4] border-2 rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-[#4E00E4] dark:hover:text-[#F4F4F4]"
                >
                  Add Deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Depositform;
