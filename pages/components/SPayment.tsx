import { CheckCircleIcon, RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const SecondPayment = () => {
  return (
    <div className="form space-y-3">
<CheckCircleIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Payment Received</h1>
  <p className="text-center ">Your Smart Invoice of [Invoice amount] has been paid by [Client_name].</p>
<div className="justify-between flex bg-gray-200">
    <div>
    <p className="text-violet-600 text-md font-bold">Submitted by 0xx1231569165</p>
    <p className="text-violet-600 text-md font-bold">Date</p>
    </div>
    <div>
        <RefreshIcon className="text-violet-600 pt-1 mt-2 font-medium h-5 w-5" />
    </div>
</div>
<p className="text-md font-bold pt-2 bold">Upload Deliverables</p>
      <select className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Invoice</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
      </select>
<div className="flex gap-3"><button>Item #1</button> <button className="bg-purple-500 rounded-md text-sm text-white p-2">Add more items</button></div>
<input
      type="link"
      name="fullname"
      placeholder="Link to deliverables"
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
      </div>
  );
};
export default SecondPayment;
