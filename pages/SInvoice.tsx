import Link from "next/link";
import { useEffect, useState } from "react";
import {  useAccount} from "wagmi";
import axios, * as others from 'axios';
import MultiStepProgressBar from "./components/MultiStepProgressBar";
import {
  setGlobalState,
  setAlert,
} from "../store";
import { verifyMessage } from "ethers/lib/utils";
import BigNumber from 'bignumber.js';
import { arrayify, Bytes, solidityKeccak256 } from "ethers/lib/utils";
import { useSignMessage } from "wagmi";
import { deposit, approve } from "./Blockchain.Services";
import { PencilAltIcon } from "@heroicons/react/outline";


const SInvoice= () => {  
  const [data,setData] = useState({
      contract: "",
  })
  const [hash, SetHash] = useState([]);

  type SignedContextStruct = {
    signer: string;
    signature: Bytes;
    context: BigNumber[];
  };
  const { address} = useAccount();
  const { signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      const recoveredAddress = address;
    },
  });
  const fetchData = () => {
  const ContractId = data.contract;
  const token = localStorage.getItem('myData');
  const id = localStorage.getItem('contractid');
  const url =  `http://localhost:3001/api/v2/contract/sign/${id}`
      axios.get(url,{
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(res=>{
          console.log(res.data)
        // const depositor = "0x0Ba3f9705314d145885BDdCaDB90f98BBD6C4BF1";
        // const contextHash = solidityKeccak256(["uint256[]"], [context]);
        const context = localStorage.setItem('context', res.data);
        console.log(res.data.data.context)
        SetHash(res.data.data.context)
      })
    }

      useEffect(() => {
        fetchData();
      },[])
    
    const handleSubmission = async (e) => {
      
      e.preventDefault();
        const fileHash = 1
        const context = hash
        const signer = address
        console.log(signer)
        console.log(hash)
       
        // const depositor = "0x0Ba3f9705314d145885BDdCaDB90f98BBD6C4BF1";
        const contextHash = solidityKeccak256(["uint256[]"], [context]);
        const message = arrayify(contextHash);
        const signature = signMessage({ message });
        
        console.log(signature);
        const signedContext: SignedContextStruct[] = [
          {
            signer: signer,
            signature: message,
            context: context,
          },
        ];
        const amount = hash[3]
        console.log(amount);
        const allow = await approve({amount})
        console.log(allow);
        const flow = await deposit({ fileHash, signedContext });
        // setFileHash(metadataURI);
        console.log(flow);
       
    };

  return (
    <>
     <div style={{ margin: "auto", width: "50%" }}>
        <MultiStepProgressBar step={1} />
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="space-y-4 md:space-y-6" >
                  <div>
                  <div className="userForm-container-body">

                  <form className="form space-y-2">
                  <PencilAltIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Sign Contract</h1>
  <p className="text-center"> The deliverables are being reviewed by [client_name]. They have until [insert_date] to review them.</p>
  <p className="text-center">Passed this period the funds will be automatically unlocked. </p>
      <button onClick={handleSubmission} className="btn">Sign Contract</button>
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
export default SInvoice;
