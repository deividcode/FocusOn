import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaTasks, FaClock } from "react-icons/fa";


export const MenuMobile = () => {
  
  return (
    <>
      <NavLink to="/" className="w-6">    
        {({ isActive, isPending, isTransitioning }) => (
          <FaTasks className={isActive ? "linkActive w-full h-full" : "linkPending w-full h-full"}  />         
        )}        
      </NavLink>    

      <NavLink to="timer" className="w-6">
        {({ isActive, isPending, isTransitioning }) => (       
          <FaClock className={isActive ? "linkActive w-full h-full" : "linkPending w-full h-full"} />          
        )}    
      </NavLink>    
    </>   
  )
}
