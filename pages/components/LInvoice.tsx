import { BadgeCheckIcon } from "@heroicons/react/outline";
import React from "react";

const LInvoice = () => {
  return <div className="space-y-3">
  <BadgeCheckIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Invoice Created</h1>
  <p className="text-center "> Your Smart Invoice for [client_name] has been sent and a copy has been emailed to you.</p>
  <p className="text-center ">We&lsquo;ll let you know as soon as the payment is locked in Payant.</p>
  </div>;
};
export default LInvoice;
