import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";
import logo from "./Assets/logo.png";
import {
  CogIcon,
  CreditCardIcon,
  FolderOpenIcon,
  HomeIcon,
  MenuIcon,
  PlusCircleIcon,
  ShareIcon,
  XIcon,
} from '@heroicons/react/outline'
import Head from 'next/head';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
} from "wagmi";
import truncateEthAddress from "truncate-eth-address";
import dynamic from "next/dynamic";
import Link from 'next/link';
import Login from './Login';
import Form from './Clientform';
import UserPayment from './UsePayment';


const navigation = [
  { name: 'Dashboard', href: '/Dashboard', icon: HomeIcon, current: false },
  { name: 'Create an invoice', href: '/Invoice', icon: PlusCircleIcon, current: false},
  { name: 'Deliverables', href: '#', icon: FolderOpenIcon, current: true },
  { name: 'Transactions', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Settings', href: '/Settings', icon: CogIcon, current: false },
  { name: 'Refferals', href: '#', icon: ShareIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Deliverables = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
    <Head>
        <title>Payant/Deliverables</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5  pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 m-5  items-center px-4">
                  <Image className="w-full h-12  mb-5" src={logo} alt="logo" />
              {isConnected ? (
                <div className="flex gap-x-8">
                  
                  <div>
                    {" "}
                    
                    {ensName
                      ? `${ensName} (${address})`
                      : truncateEthAddress(address)}
                  </div>
                  <button onClick={disconnect} className=" border-2 pr-2 rounded-md pl-2 border-red-600">
                    Disconnect
                  </button>
                </div>
              ) : (
                <div>
                  {connectors.map((connector) => (
                    <button
                      disabled={!connector.ready}
                      key={connector.id}
                      className=" border-2 pr-8 rounded-md pl-8 border-violet-800 hover:text-white hover:bg-indigo-600"
                      onClick={() => connect({ connector })}
                    >
                      Connect Wallet
                      {!connector.ready && " (unsupported)"}
                      {isLoading &&
                        connector.id === pendingConnector?.id &&
                        " (connecting)"}
                    </button>
                  ))}

                  {error && <div>{error.message}</div>}
                </div>
              )} 
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
               
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 m-5 pb-4 overflow-y-auto">
              <div className="items-center text-center flex-shrink-0 px-4">
              <Image className="w-full h-12  mb-5" src={logo} alt="logo" />
              {isConnected ? (
                <div className="lg:flex lg:gap-x-8">
                  
                  <div>
                    {" "}
                    
                    {ensName
                      ? `${ensName} (${address})`
                      : truncateEthAddress(address)}
                  </div>
                  <button onClick={disconnect} className=" border-2 pr-2 rounded-md pl-2 border-red-600">
                    Disconnect
                  </button>
                </div>
              ) : (
                <div>
                  {connectors.map((connector) => (
                    <button
                      disabled={!connector.ready}
                      key={connector.id}
                      className=" border-2 pr-8 rounded-md pl-8 border-violet-800 hover:text-white hover:bg-indigo-600"
                      onClick={() => connect({ connector })}
                    >
                      Connect Wallet
                      {!connector.ready && " (unsupported)"}
                      {isLoading &&
                        connector.id === pendingConnector?.id &&
                        " (connecting)"}
                    </button>
                  ))}

                  {error && <div>{error.message}</div>}
                </div>
              )}
            
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main >
                <div className='  py-36'>
                  <UserPayment />
                </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default dynamic (() => Promise.resolve(Deliverables), {ssr: false})
