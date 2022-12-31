import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "./Assets/logo.png";

export default function Form() {
  return (
    <>
      <Head>
        <title>Payant/Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <section className="bg-gray-50 ">
     
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold  leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an Invoice 
              </p>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>  
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's Name" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's Name" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's Name" required />
                  </div>
                  <div>
                      <input type="name" name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's Name" required />
                  </div>
                  <div>
                      <textarea  name="name" id="name" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-32 p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Scope of work" required />
                  </div>
                  <div className="flex">
                      <input type="date" name="name" id="name" placeholder="Start Date" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      <input type="date" name="name" id="name" placeholder="End Date" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
              <Link href="#">    <button type="submit" className="w-full mt-4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button></Link>
                
              </form>
          </div>
      </div>
  </div>
</section>
      
    </>
  )
}