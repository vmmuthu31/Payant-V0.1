import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios, * as others from "axios";
import {
  useGlobalState,
  setGlobalState,
  setLoadingMsg,
  setAlert,
} from "../store";
import { create } from "ipfs-http-client";
import deposit from "./Blockchain.Services";

const auth =
  "Basic " +
  Buffer.from(
    process.env.REACT_APP_INFURIA_PID + ":" + process.env.REACT_APP_INFURIA_API
  ).toString("base64");

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const Depositform = () => {
  const notify = () => toast.success("New Client added!");
  const [file, setFile] = useState("");
  const [depositor, setDepositor] = useState("");
  const [withdrawer, setWithdrawer] = useState("");
  const [price, setPrice] = useState("");
  const [erc, setErc] = useState("");
  const [imgBase64, setImgBase64] = useState(null);
  const resetForm = () => {
    setFile("");
    setDepositor("");
    setWithdrawer("");
    setOne("");
    setErc("");
    setImgBase64(null);
  };

  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFile(e.target.files[0]);
    };
  };

  const handleSubmission = async (e) => {
    console.log("Deposit submission");
    e.preventDefault();
    if (!file || !depositor || !price) return;

    setGlobalState("modal", "scale-0");
    setGlobalState("loading", { show: true, msg: "Uploading data..." });

    const formData = new FormData();
    formData.append("file", file);
    const metadata = JSON.stringify({
      name: depositor,
      keyvalues: {
        price: price,
        withdraw: withdrawer,
        description: erc,
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
      const created = res.data.IpfsHash;
      console.log(created);
      const metadataURI = `https://ipfs.io/ipfs/${created}`;
      const flows = { file, depositor, withdrawer, price, erc };
      setLoadingMsg("Intializing transaction...");
      setFile(metadataURI);
      console.log(metadataURI);
      await deposit(flows);
      resetForm();
      setAlert("Deposit completed...", "green");
      window.location.reload();
      setLoadingMsg("File Uploaded completed successfully");
      console.log("File Uploaded completed successfully...");
      setLoadingMsg("Intializing transaction...");
      console.log(flows);
      setGlobalState("loading", { show: false });
    } catch (error) {
      console.log(error);
      setAlert("transaction failed...", "red");
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
                <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
                  <img
                    alt=""
                    className="h-full w-full object-cover cursor-pointer"
                    src={
                      imgBase64 ||
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                    }
                  />
                </div>
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
                    placeholder="Depositor"
                    onChange={(e) => setDepositor(e.target.value)}
                    value={depositor}
                    required
                  />
                </div>

                <div className="">
                  <input
                    className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#F4F4F4] focus:border-[#F4F4F4] block w-full p-2.5"
                    type="number"
                    name="price"
                    placeholder="Price (Eth)"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                  />
                </div>

                <div className="">
                  <textarea
                    className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#F4F4F4] focus:border-[#F4F4F4] block w-full p-2.5"
                    name="description"
                    placeholder="Withdrawer Address"
                    onChange={(e) => setWithdrawer(e.target.value)}
                    value={withdrawer}
                    required
                  ></textarea>
                </div>
                <div className="">
                  <textarea
                    className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#F4F4F4] focus:border-[#F4F4F4] block w-full p-2.5"
                    name="description"
                    placeholder="ERC Value"
                    onChange={(e) => setErc(e.target.value)}
                    value={erc}
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