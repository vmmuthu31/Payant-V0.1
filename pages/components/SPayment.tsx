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
    <p className="text-violet-600 text-md font-extrabold">Submitted by 0xx1231569165</p>
    <p className="text-violet-600 text-md font-extrabold">Date</p>
    </div>
    <div>
        <RefreshIcon className="text-violet-600 pt-1 mt-2 h-5 w-5" />
    </div>
</div>

      </div>
  );
};
export default SecondPayment;
