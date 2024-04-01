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

  }, [followIconTheme])
  

  return (
    <>
      <div className="w-full flex justify-between px-5">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">FocusOn</p>
          <svg className="w-7" width="800px" height="auto" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
            <path fill="#6246ea" d="M105 25c0 5.34-5.24 11.264-7.723 13.771a1.78 1.78 0 0 1-2.554 0C92.239 36.264 87 30.341 87 25a9 9 0 1 1 18 0ZM87 167c0-5.341 5.24-11.264 7.723-13.771a1.779 1.779 0 0 1 2.554 0C99.761 155.736 105 161.659 105 167a9 9 0 0 1-9 9 9 9 0 0 1-9-9Zm80-62c-5.341 0-11.264-5.24-13.771-7.723a1.779 1.779 0 0 1 0-2.554C155.736 92.239 161.659 87 167 87a9 9 0 0 1 9 9 9 9 0 0 1-9 9ZM25 87c5.34 0 11.264 5.24 13.771 7.723a1.78 1.78 0 0 1 0 2.554C36.264 99.761 30.341 105 25 105a9 9 0 1 1 0-18Zm127.569-34.84c-3.777 3.776-11.67 4.26-15.199 4.277a1.78 1.78 0 0 1-1.806-1.807c.017-3.53.5-11.422 4.277-15.199a9 9 0 1 1 12.728 12.728ZM39.431 139.841c3.777-3.777 11.67-4.26 15.2-4.277a1.78 1.78 0 0 1 1.805 1.806c-.017 3.529-.5 11.422-4.277 15.199a9 9 0 1 1-12.728-12.728Zm100.41 12.728c-3.777-3.777-4.26-11.67-4.277-15.199a1.78 1.78 0 0 1 1.806-1.806c3.529.017 11.422.5 15.199 4.277a9.001 9.001 0 0 1 0 12.728 9.001 9.001 0 0 1-12.728 0ZM52.16 39.431c3.776 3.777 4.26 11.67 4.277 15.2a1.78 1.78 0 0 1-1.807 1.805c-3.53-.017-11.422-.5-15.199-4.277a9 9 0 0 1 0-12.727 9 9 0 0 1 12.728 0Z"/>
            <path stroke="#6246ea" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m80 96 16 16 32-32"/>
            </g>
          </svg>
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

