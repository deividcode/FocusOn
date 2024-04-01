import React from 'react'

export const FormInput = (props) => {
   
  return (
   <input              
   {...props}
    className="block w-full flex-1 border-0 bg-transparent py-2 pl-3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
  )
}
