import React from "react";


const TInvoice = (props) => {
  return (
    <div className="form">
      <input
        type="text"
        name="fullname"
        placeholder="Steve Jobs"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={props.handleChange("fullName")}
      />
      <input
        type="text"
        name="displayName"
        placeholder="Steve"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
       
        onChange={props.handleChange("displayname")}
      />
    </div>
  );
};
export default TInvoice;
