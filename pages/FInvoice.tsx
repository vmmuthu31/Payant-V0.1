import Link from "next/link";
import { useState } from "react";
import {  useAccount} from "wagmi";
import axios, * as others from 'axios';
import MultiStepProgressBar from "./components/MultiStepProgressBar";
import {
  setGlobalState,
  setAlert,
} from "../store";

const FInvoice= () => {
  const { address} = useAccount();
  const [imgBase64, setImgBase64] = useState(null);
  const [file, setFile] = useState(null);
  const [fileHash, setFileHash] = useState("");

  const url = "http://localhost:3001/api/v2/contract/"
  const [data,setData] = useState({
    description: "",
    contractEndTime: "",
    contractStartTime: "",
    contractAmount: "",
    contractCurrency: "",
    client: "",
    contractId: "",
    hidden: true,
    ipfsHash: ""
  })
  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFileHash(e.target.files[0]);
    };
  };
  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}
const UploadFile = async (e) => {
  // console.log("Deposit submission");
  e.preventDefault();
  const formData = new FormData();
    formData.append("file", fileHash);
    const metadata = JSON.stringify({
      keyvalues: {
        signature: "hello",
      },
    });
    formData.append("pinataMetadata", metadata);
    const options = JSON.stringify({ cidVersion: 0 });
    formData.append("pinataOptions", options);
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
    data.ipfsHash = res.data.IpfsHash;
    // const fileHash = 1
    console.log(data.ipfsHash);
}
function submit(e){
const token = localStorage.getItem('myData');
localStorage.setItem('contractid', data.contractId);
console.log(token);
  e.preventDefault();
  axios.post(url,{
    description: data.description,
    contractEndTime: data.contractEndTime,
    contractStartTime: data.contractStartTime,
    contractAmount: data.contractAmount,
    contractCurrency: data.contractCurrency,
    client: data.client,
    contractId: data.contractId,
    hidden: true,
    ipfsHash: data.ipfsHash,
  },{
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res=>{
      console.log(res.data)
      if(res.data.status == true){
          window.location = "/SignInvoice"
          console.log("Successfully Added!")
          alert("Contract has been successfully added!")
      }else{
          alert("Contract is already registered!")
          console.log("Contract is already registered!")
      }
  })
}

  return (
    <>
     <div style={{ margin: "auto", width: "50%" }}>
        <MultiStepProgressBar step={0} />
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create Invoice
              </p>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                  <div className="userForm-container-body">

                  <form onSubmit={(e)=> submit(e)} className="form space-y-2">
      <input
        type="text"
        placeholder="Description"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => handle(e)} name="description" id="description" value={data.description}
      />
          <div className="flex gap-5">
     <input
      type="text"
      placeholder="Start Date"
      onChange={(e) => handle(e)} name="contractStartTime" id="contractStartTime" value={data.contractStartTime}
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
     <input
      type="text"
      placeholder="End Date"
      onChange={(e) => handle(e)} name="contractEndTime" id="contractEndTime" value={data.contractEndTime}
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    </div>
      <input
        type="text"
        placeholder="Contract Amount"
        onChange={(e) => handle(e)} name="contractAmount" id="contractAmount" value={data.contractAmount}
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Contract Currency Name"
        onChange={(e) => handle(e)} name="contractCurrency" id="contractCurrency" value={data.contractCurrency}
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Client"
        onChange={(e) => handle(e)} name="client" id="client" value={data.client}
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
       <input
        type="text"
        placeholder="Contract ID"
        onChange={(e) => handle(e)} name="contractId" id="contractId" value={data.contractId}
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="flex gap-5">
      <input
        type="file"
        name="fullname"
        onChange={changeImage}
        placeholder="Upload file"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button  onClick={UploadFile} className="btn-grad3">Upload File</button>
      </div>
      <button type="submit" className="btn">Create Invoice</button>
    </form>
  </div>
  </div>
  </div>
          </div>
      </div>
      </div>
    
    
    </>
  );
};
export default FInvoice;
