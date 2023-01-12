import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "./Assets/logo.png";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CogIcon, InformationCircleIcon, PlusCircleIcon,
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
  <div className="flex  items-center justify-center  px-6 mx-auto  ">
     
  <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8"> 
          <div className="flex gap-14"> 
        <div className=" layor-box1">

          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
          <div>
            <p className="flex layor-box1-text1">Total Received <InformationCircleIcon  className="w-[9px] h-[9px]  text-[#4E00E4]" /></p>
          <p className="layor-box1-text2 ">
              $32,3k
              </p>
              </div>
          </div>
      </div>
      <div className="layor-box1">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
          <div>
            <p className="flex layor-box1-text1"> Awaiting Payment <InformationCircleIcon  className="w-[9px] h-[9px]  text-[#4E00E4]" /></p>
          <p className="layor-box1-text2 ">
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
          <p className="layor-box1-text2 ">
          $2,055
              </p>
              </div>
          </div>
      </div>
      <div className="layor-box1">
          <div className="space-y-6  p-8">
          <div>
            <p className="flex layor-box1-text1">Paid Out &nbsp;<InformationCircleIcon  className="w-[9px] h-[9px]  text-[#4E00E4]" /> </p>
          <p className="layor-box1-text2">
          $2,055
              </p>
              </div>
          </div>
      </div> 
      </div> 
          </div>
      </div>
      <div className="layor-box2 ">
          <div className=" ">
          <div className="flex justify-between p-7">
            
          <p className="layor-box2-title">
              Recent Invoices
              </p>
              <Link href="/Invoice"><button className="border-2 pr-6 p-1 text-[#4E00E4] hover:text-white hover:bg-[#4E00E4] font-[Lacto] rounded-md pl-6 border-[#4E00E4] flex">Create Invoice <PlusCircleIcon className="m-1.5 plus-icon" /> </button></Link>
              </div>
              <div className="mx-5 text-[14px]  justify-between">
              <table className="table2">
  <tr className="layor-box3-row layor-box3-text">
  <th>Invoice</th>
                    <th>Client Name</th>
                    <th>Status</th>
                    <th className="text-[#a882f3] underline"> -</th>
                    <th className="text-[#8B8B8B]">Deadline</th>
                    <th >Invoice Amount</th>
  </tr>
  <tr className="p-2 layor-box2-text ">
  <td>#1</td>
                    <td>Client Name</td>
                    <td>Status</td>
                    <td className="text-[#a882f3] underline"> Deliverables</td>
                    <td className="text-[#8B8B8B]">Deadline</td>
                    <td>$2,352.00</td>
  </tr>
  <tr className="p-2 layor-box2-text ">
  <td>#1</td>
                    <td>Client Name</td>
                    <td>Status</td>
                    <td className="text-[#a882f3] underline"> Deliverables</td>
                    <td className="text-[#8B8B8B]">Deadline</td>
                    <td>$2,352.00</td>
  </tr>
  <tr className="p-2 layor-box2-text ">
  <td>#1</td>
                    <td>Client Name</td>
                    <td>Status</td>
                    <td className="text-[#a882f3] underline"> Deliverables</td>
                    <td className="text-[#8B8B8B]">Deadline</td>
                    <td>$2,352.00</td>
  </tr>
  <tr className="p-2 layor-box2-text ">
  <td>#1</td>
                    <td>Client Name</td>
                    <td>Status</td>
                    <td className="text-[#a882f3] underline"> Deliverables</td>
                    <td className="text-[#8B8B8B]">Deadline</td>
                    <td>$2,352.00</td>
  </tr>
</table>
              </div>
              </div>
      </div>
  </div>
  <div className="flex mx-auto px-5 gap-[33px] justify-center items-center  ">
    
  <div className="layor-box3 ">
          <div className="p-6 space-y-4 md:space-y-4  ">
          <div className="flex justify-between">
             <p className="layor-box3-title">
                 Transaction History
                 </p>
                 <button className=" border-2 pr-8 hover:text-white text-[#4E00E4] hover:bg-[#4E00E4]  rounded-md pl-8 border-[#4E00E4]">View all</button>
                 </div>
                 <div className=" text-[14px]  justify-between">
              <table className="table">
  <tr className="p-2 layor-box3-text layor-box3-row">
  <td>#52</td>
                    <td>Deposit</td>
                    <td className="text-[#8B8B8B]">0x126556556</td>
                    <td className="text-[#8B8B8B]"> 0x464846648</td>
                    <td className="text-[#8B8B8B]">Dec 18th 2022</td>
                    <td className="text-[#05C705]">+$2,352.00</td>
  </tr>
  <tr className="p-2 layor-box3-text layor-box3-row">
  <td>#52</td>
                    <td>Deposit</td>
                    <td className="text-[#8B8B8B]">0x126556556</td>
                    <td className="text-[#8B8B8B]"> 0x464846648</td>
                    <td className="text-[#8B8B8B]">Dec 18th 2022</td>
                    <td className="text-[#05C705]">+$2,352.00</td>
  </tr>
  <tr className="p-2 layor-box3-text layor-box3-row ">
  <td>#52</td>
                    <td>Deposit</td>
                    <td className="text-[#8B8B8B]">0x126556556</td>
                    <td className="text-[#8B8B8B]"> 0x464846648</td>
                    <td className="text-[#8B8B8B]">Dec 18th 2022</td>
                    <td className="text-[#4E00E4]">-$2.45</td>
  </tr>
  <tr className="p-2 layor-box3-text layor-box3-row">
  <td>#52</td>
                    <td>Deposit</td>
                    <td className="text-[#8B8B8B]">0x126556556</td>
                    <td className="text-[#8B8B8B]"> 0x464846648</td>
                    <td className="text-[#8B8B8B]">Dec 18th 2022</td>
                    <td className="text-[#05C705]">+$2,352.00</td>
  </tr>
  <tr className="p-2 layor-box3-text layor-box3-row">
  <td>#52</td>
                    <td>Deposit</td>
                    <td className="text-[#8B8B8B]">0x126556556</td>
                    <td className="text-[#8B8B8B]"> 0x464846648</td>
                    <td className="text-[#8B8B8B]">Dec 18th 2022</td>
                    <td className="text-[#05C705]">+$2,352.00</td>
  </tr>
  
  
</table>
              </div>         
             </div>
         </div>
     <div className="w-full rounded-lg md:mt-0  sm:max-w-lg lg:max-w-lg xl:p-0">
             <div className=" space-y-4 md:space-y-4 "> 
             <div className="flex gap-14"> 
           <div className="layor-box4">
   
             <div className="p-6  space-y-4 md:space-y-4 sm:p-8">
             <div className="flex justify-between">
             <p className="layor-box2-title py-2">
                 Client(s)
                 </p>
                 <Popup
    trigger={<button className="border-2 pr-2 p-1 hover:text-white hover:bg-[#4E00E4]  rounded-md pl-6 text-[#4E00E4] border-[#4E00E4] flex">New Client <PlusCircleIcon className="m-1.5 plus-icon hover:text-white " /> </button>}
    modal>
    (
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
    )
  </Popup>
                 
                 </div>
                 
                 
                 <div className="justify-between">
                 <table className="table3">
                 <tr className="layor-box4-th-text">
                    <th className="layor-box4-th-text">Clients Name</th>
                    <th className="layor-box4-th-text">Awaiting Payment</th>
                    <th className="layor-box4-th-text">Total Paid Out</th>   
                 </tr>
                <tr className=" layor-box4-tr">
                    <td>Payant</td>
                    <td>$2,120.00</td>
                    <td className="text-[#05C705]">$3,352.00</td>
                </tr>
                <tr className=" layor-box4-tr">
                    <td>Payant</td>
                    <td>$2,120.00</td>
                    <td className="text-[#05C705]">$3,352.00</td>
                </tr>
                <tr className="p-2 layor-box4-tr">
                    <td>Payant</td>
                    <td>$2,120.00</td>
                    <td className="text-[#05C705]">$3,352.00</td>
                </tr>
                <tr className="p-2 layor-box4-tr">
                    <td>Payant</td>
                    <td>$2,120.00</td>
                    <td className="text-[#05C705]">$3,352.00</td>
                </tr>
                
                
  </table>
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