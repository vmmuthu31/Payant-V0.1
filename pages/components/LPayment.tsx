import { BadgeCheckIcon } from "@heroicons/react/outline";
import React from "react";

const LastPayment = () => {
  return <div className="space-y-3">
  <BadgeCheckIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Funds Unlocked</h1>
  <p className="text-center">The deliverables have been successfully reviewed by [client_name]. The funds have been unlocked</p>
  
  </div>;
};
export default LastPayment;
