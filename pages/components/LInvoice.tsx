import { BadgeCheckIcon } from "@heroicons/react/outline";
import React from "react";

const LInvoice = () => {
  return <>
  <BadgeCheckIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Invoice Created</h1>
  <p className="text-center "> The deliverables have been successfully reviewed by [client_name]. The funds have been unlocked</p>
  
  </>;
};
export default LInvoice;
