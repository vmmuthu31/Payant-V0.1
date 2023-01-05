import { DocumentAddIcon } from "@heroicons/react/outline";
import React from "react";


const ThirdPayment = () => {
  return (
    <div className="form space-y-3">
<DocumentAddIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Under Review</h1>
  <p className="text-center"> The deliverables are being reviewed by [client_name]. They have until [insert_date] to review them.</p>
  <p className="text-center">Passed this period the funds will be automatically unlocked. </p>
      </div>
  );
};
export default ThirdPayment;
