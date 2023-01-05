import { DocumentAddIcon } from "@heroicons/react/outline";
import React from "react";


const ThirdPayment = (props) => {
  return (
    <div className="form space-y-3">
<DocumentAddIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Under Review</h1>
  <p className="text-center "> The deliverables have been successfully reviewed by [client_name]. The funds have been unlocked</p>
      </div>
  );
};
export default ThirdPayment;
