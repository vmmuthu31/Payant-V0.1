import Image from "next/image";
import logo from "./Assets/logo.png";

export default function Signin() {
  return (
    <>
      
     <section className="bg-gray-50 dark:bg-gray-200">
     
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="w-full h-12 mr-2" src={logo} alt="logo" />

      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
                  </div>
                  <div>
                      
                      <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-blue-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm text-center  text-black ">
                      Not a user yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-blue-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
      
    </>
  )
}