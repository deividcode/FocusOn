import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { RiComputerLine, RiComputerFill } from "react-icons/ri";

import { IoSunny, IoSunnyOutline, IoMoonOutline, IoMoon } from "react-icons/io5";

const typeIconTheme = {
  'light': () => <IoSunny className='w-full h-full'/>,
  'dark': () => <IoMoon className='w-full h-full'/>,
  'system': () => <RiComputerFill className='w-full h-full'/>
}

export const Header = () => {

  const [followIconTheme, setFollowIconTheme ] = useState("light")

  useEffect(() => {
    const bodyHtml = document.querySelector('body')     
    bodyHtml.classList.remove(...bodyHtml.classList);
    bodyHtml.classList.add(followIconTheme);    

    console.log(bodyHtml)
    console.log(followIconTheme);
  }, [followIconTheme])
  

  return (
    <>
      <div className="w-full flex justify-between px-5">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">FocusOn</p>
          <img className="w-8" src="/src/assets/focuson.svg" alt="FocusOn" />
        </div>
        
        <div className="">
          <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-14 justify-center rounded-md px-4 py-2 text-sm font-medium">           
            {
              typeIconTheme[followIconTheme] ? typeIconTheme[followIconTheme]() : typeIconTheme['light']   
            }         
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button                  
                    onClick={() => setFollowIconTheme('ligth')}
                    className={`${
                      active ? 'bg-electric-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LightActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <LightInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Light
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={()=> setFollowIconTheme('dark')}
                    className={`${
                      active ? 'bg-electric-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DarkActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DarkInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Dark
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={()=> setFollowIconTheme('system')}
                    className={`${
                      active ? 'bg-electric-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <SystemActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <SystemInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    System
                  </button>
                )}
              </Menu.Item>
            </div>                     
          </Menu.Items>
        </Transition>
          </Menu>
        </div>
      
      </div>
    </>
  );
};

function LightInactiveIcon(props) {
  return (      
    <IoSunnyOutline
      {...props}
    />
  )
}

function LightActiveIcon(props) {
  return (    
    <IoSunny
      {...props}
    />
  )
}

function DarkInactiveIcon(props) {
  return (
    <IoMoonOutline 
      {...props}
    />    
  )
}

function DarkActiveIcon(props) {
  return (
    <IoMoon
      {...props}
    />    
  )
}

function SystemInactiveIcon(props) {
  return (
    <RiComputerLine 
      {...props}
    />    
  )
}

function SystemActiveIcon(props) {
  return (
    <RiComputerFill 
      {...props}     
    />    
  )
}

