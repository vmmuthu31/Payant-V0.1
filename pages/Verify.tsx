import { MailIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "./Assets/logo.png";

export default function Verify() {
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
      <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="w-full h-12 mr-2" src={logo} alt="logo" />
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4   md:space-y-2 sm:p-8">
            
              <MailIcon className="h-12 w-12 mx-auto text-green-600 " aria-false="true" />
            
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                  <h1 className=" text-center items-center mb-2 text-lg text-gray-900"> Check your mail</h1>
                      <h1 className=" text-center items-center mb-6 text-xl font-semibold text-gray-900"> We sent a Verification link to <span className="cursor-pointer text-[#4E00E4]">user@email.com</span></h1>
                  </div>
                  <div className="text-center">
                     Follow the instructions in the email to confirm and activate your account.
                    
                      </div>
                  <div className="text-center">
                  Dont receive an email? <span className="text-[#4E00E4] bold cursor-pointer">Send Again</span> 
                  </div>     
              </form>
          </div>
      </div>
  </div>
</section>
      
    </>
  )
}
