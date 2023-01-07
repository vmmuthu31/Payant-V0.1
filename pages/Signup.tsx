import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "./Assets/logo.png";
import dynamic from "next/dynamic";
import { useState } from "react";
import axios, * as others from 'axios';

const Signup = () => {
    const url = "http://localhost:3000/api/v2/user/register"
    const [data,setData] = useState({
        email: "",
        password: "",
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            email: data.email,
            password: data.password,
        })
        .then(res=>{
            console.log(res.data)
            if(res.data.status == true){
                window.location = "/Verify"
                console.log("Successfully Registered!")
                alert("Successfully Registered Please Login")
            }else{
                alert("Email id is already registered!")
                console.log("Email id is already registered!")
            }
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
  return (
    <div className= "bg-img1 md:h-screen lg:py-0 ">
      <Head>
        <title>Payant/Signup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <section >
     <div className=" px-20 py-8 space-y-12 mx-auto ">
  <div className="">
          <Image className="w-40 h-12 " src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-white px-20 rounded-lg shadow dark:border md:mt-0 sm:max-w-md  xl:p-0">
          <div className="px-[22px] ">
              <p className="text-xl font-bold text-center leading-tight pt-[40px] tracking-tight text-[#373737] md:text-[24px] ">
                  Create a free account
              </p>
              <form className="space-y-4 pt-[20px] md:space-y-6" onSubmit={(e)=> submit(e)} action="#">
                 <div>
                      
                      <input type="name" name="name" id="name" className="border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-[#F4F4F4] focus:border-[#F4F4F4] block w-full p-2.5" placeholder="Full Name" required />
                  </div>
                  <div>
                      
                      <input type="email" onChange={(e) => handle(e)} name="email" id="email" value={data.email} className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
                  </div>
                  <div>
                      
                      <input type="password" onChange={(e) => handle(e)} name="password" id="password" value={data.password} placeholder="Password" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div>
                      
                      <input type="password" name="password" id="password" placeholder="Confirm Password" className=" border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex items-center">
                      <input className="mr-1" type="radio" /><p className="text-[11px]">By creating an account. I agree to Payant terms of services and privacy quickly</p>
                  </div>
               <button type="submit" className="w-full mt-4 text-[#4E00E4]  hover:bg-primary-700 focus:ring-4  focus:ring-primary-300 font-medium border-[#4E00E4] border-2 rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-[#4E00E4] dark:hover:text-[#F4F4F4]">Sign Up</button>
                  <p className="text-sm text-center pb-[20px] text-black ">
                      Already a user? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-[#4E00E4]"><Link href="/Login"> Login</Link></a>
                  </p>
              </form>

            </div>  
          </div>
      </div>
  </div>
</section>
      
    </div>
  )
}

export default dynamic (() => Promise.resolve(Signup), {ssr: false})