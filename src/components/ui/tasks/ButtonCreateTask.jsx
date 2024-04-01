import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaPlus } from "react-icons/fa";

export const ButtonCreateTask = ({isOpen, setIsOpen, openModal, closeModal}) => {
   
   return (
      <>
         <button
            className='absolute bottom-0 right-0 inline-block p-3 rounded-full bg-electric-violet-600'
            onClick={openModal}
         >
            <FaPlus className='w-4 fill-electric-violet-50' />            
         </button>         
      </>
   )
}
