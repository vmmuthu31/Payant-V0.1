import React from "react";

const SInvoice = () => {
  return (
    <div className="form space-y-2">
    <input
      type="text"
      name="fullname"
      placeholder="Invoice's Name"
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <div className="flex gap-3"><button>Item #1</button> <button className="bg-purple-500 rounded-md text-sm text-white p-2">Add more items</button></div>
    <textarea
      name="displayName"
      placeholder="Scope of work"
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-40  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <div className="flex gap-5">
     <input
      type="text"
      name="fullname"
      placeholder="Start Date (Optional)"
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
     <input
      type="text"
      name="fullname"
      placeholder="End Date (Optional)"
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    </div>
     <input
      type="text"
      name="fullname"
      placeholder="Price"
      className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />

  </div>
  );
};
export default SInvoice;
