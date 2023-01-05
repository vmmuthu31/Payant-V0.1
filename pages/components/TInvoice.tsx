import React from "react";

const TInvoice = () => {
  return (
    <div className="form space-y-3">
      <input
        type="text"
        name="fullname"
        placeholder="Client's Name"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        name="displayName"
        placeholder="Invoice's Name"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
        type="text"
        name="displayName"
        placeholder="Total Amount"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
        type="text"
        name="displayName"
        placeholder="Payat's Fee"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
    </div>
  );
};
export default TInvoice;
