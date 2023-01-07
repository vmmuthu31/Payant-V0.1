import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "./Assets/logo.png";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CogIcon, InformationCircleIcon,
} from '@heroicons/react/outline'

export default function DashCard() {
  const notify = () => toast.success("New Client added!");
  function handlesubmit() {
    notify();
    close();
  }
  return (
    <>
      <Head>
        <title>Payant/Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <section className="font-[Lacto] bg-gray-50">
  <div className="flex  items-center justify-center  px-6 py-8 mx-auto  lg:py-0">
     
  <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8"> 
          <div className="flex gap-14"> 
        <div className=" layor-box1">

          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
          <div>
            <p className="flex layor-box1-text1">Total Received <InformationCircleIcon  className="w-[9px] h-[9px]  text-[#4E00E4]" /></p>
          <p className="layor-box1-text2 pt-6">
              $32,3k
              </p>
              </div>
          </div>
      </div>
      <div className="layor-box1">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
          <div>
            <p className="flex layor-box1-text1"> Awaiting Payment <InformationCircleIcon  className="w-[9px] h-[9px]  text-[#4E00E4]" /></p>
          <p className="layor-box1-text2 pt-6">
              $2,055
              </p>
              </div>
          </div>
      </div>
      </div>
      <div className="flex grow gap-14">
      <div className="layor-box1">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
          <div>
            <p className="flex layor-box1-text1">Awaiting Approval <InformationCircleIcon  className="w-[9px] h-[9px]  text-[#4E00E4]" /> </p>
          <p className="layor-box1-text2 pt-6">
          $2,055
              </p>
              </div>
          </div>
      </div>
      <div className="layor-box1">
          <div className="space-y-6  p-8">
          <div>
            <p className="flex layor-box1-text1">Paid Out &nbsp;<InformationCircleIcon  className="w-[9px] h-[9px]  text-[#4E00E4]" /> </p>
          <p className="layor-box1-text2 pt-6">
          $2,055
              </p>
              </div>
          </div>
      </div> 
      </div> 
          </div>
      </div>
      <div className="layor-box2 ">
          <div className="space-y-4 md:space-y-4 p-8">
          <div className="flex justify-between">
          <p className="layor-box2-title">
              Recent Invoices
              </p>
              <Link href="/Invoice"><button className="border-2 pr-6 p-1 hover:text-white hover:bg-[#4E00E4] font-[Lacto] rounded-md pl-6 border-[#4E00E4]">Create Invoice</button></Link>
              </div>
              <div className="flex p-2 layor-box2-text justify-between">
                    <p>#1</p>
                    <p>Client Name</p>
                    <p>Status</p>
                    <p>Deadline</p>
                    <p>$2,352.00</p>
              </div>
              <div className="flex p-2 layor-box2-text justify-between">
              <p>#1</p>
                    <p>Client Name</p>
                    <p>Status</p>
                    <p>Deadline</p>
                    <p>$2,352.00</p>
              </div>
              <div className="flex p-2 layor-box2-text justify-between">
              <p>#1</p>
                    <p>Client Name</p>
                    <p>Status</p>
                    <p>Deadline</p>
                    <p>$2,352.00</p>
              </div>
              <div className="flex p-2 layor-box2-text justify-between">
              <p>#1</p>
                    <p>Client Name</p>
                    <p>Status</p>
                    <p>Deadline</p>
                    <p>$2,352.00</p>
              </div> 
              </div>
      </div>
  </div>
  <div className="lg:flex gap-8 items-center justify-center  px-6 py-8 mx-auto  lg:py-0 ">
  <div className="w-full mt-5 bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md lg:max-w-3xl xl:p-0">
          <div className="p-6 space-y-4 md:space-y-4  sm:p-8">
          <div className="flex justify-between">
             <p className="text-xl font-bold  leading-tight tracking-tight text-gray-900 md:text-2xl ">
                 Transaction History
                 </p>
                 <button className=" border-2 pr-8 hover:text-white hover:bg-[#4E00E4]  rounded-md pl-8 border-[#4E00E4]">View all</button>
                 </div>
                 <div className="flex pt-2 justify-between">
                    <p>#52</p>
                    <p>Deposit</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Date</p>
                    <p>Amount</p>
              </div>
              <div className="flex justify-between">
              <p>#52</p>
                    <p>Deposit</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Date</p>
                    <p>Amount</p>
              </div>
              <div className="flex justify-between">
              <p>#52</p>
                    <p>Deposit</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Date</p>
                    <p>Amount</p>
              </div>
              <div className="flex justify-between">
              <p>#52</p>
                    <p>Deposit</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Date</p>
                    <p>Amount</p>
              </div>           
             </div>
         </div>
     <div className="w-full  rounded-lg md:mt-0 sm:max-w-md lg:max-w-lg xl:p-0">
             <div className="p-6 space-y-4 md:space-y-4 sm:p-8"> 
             <div className="flex gap-14"> 
           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md lg:max-w-lg xl:p-0">
   
             <div className="p-6  space-y-4 md:space-y-4 sm:p-8">
             <div className="flex justify-between">
             <p className="text-xl  font-bold  leading-tight tracking-tight text-gray-900 md:text-2xl ">
                 Client(s)
                 </p>
                 <Popup
    trigger={<button className="border-2 pr-6 p-1 hover:text-white hover:bg-[#4E00E4]  rounded-md pl-6 border-[#4E00E4] flex">New Client </button>}
    modal>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content">
        <div className="">
          <div className="p-6 space-y-2 ">
              <p className="text-lg font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Add Client
              </p>
              <form className="space-y-4 md:space-y-4" >
                 <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's Name" required />
                  </div>
                  <div>
                      <input type="email" name="email" id="email" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
                  </div>
                  <div>
                      <input type="address" name="address" id="address" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Registration Number (Optional)" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tax ID (Optional)" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="VAT ID (Optional)" required />
                  </div>
                  
             <button onClick={handlesubmit}  className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-white hover:bg-indigo-600 border-2 pr-8  pl-8 border-indigo-600">Create Client</button>
             <ToastContainer />
             </form>   
          </div>
      </div>
       
      </div>
      </div>
    )}
  </Popup>
                 
                 </div>
                 
                 
                 <div className="flex justify-between">
                    <p>Client Name</p>
                    <p>Awaiting Period</p>
                    <p>Total Paid Out</p>
              </div> 
              <div className="flex justify-between">
                    <p>Payant</p>
                    <p>$2,120.00</p>
                    <p className="text-green-500">$3,325.00</p>
              </div>               <div className="flex justify-between">
              <p>Payant</p>
                    <p>$2,120.00</p>
                    <p className="text-green-500">$3,325.00</p>
              </div> 
              <div className="flex justify-between">
              <p>Payant</p>
                    <p>$2,120.00</p>
                    <p className="text-green-500">$3,325.00</p>
              </div> 
             </div>
         </div>
        </div>
         
             </div>
         </div>
         
     </div>
</section>
      
    </>
  )
}