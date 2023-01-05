import Link from "next/link";

const FInvoice= () => {
  return (
    <div className="form">
      <input
        type="text"
        name="fullname"
        placeholder="Invoice's Name"
        className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    <Link href="/Clientform">  <p className="text-end text-md text-purple-600 pt-2 bold">New Client</p></Link>
      <select className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Client</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
        <option>Client Name 1</option>
      </select>
        
    </div>
  );
};
export default FInvoice;
