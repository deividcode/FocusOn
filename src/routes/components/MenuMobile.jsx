import { Link } from "react-router-dom"

export const MenuMobile = () => {
  return (
    <>
      <Link to="/">
        <svg className="opacity-75 fill-electric-violet-950" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-square-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.626 7.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
      </Link>    

      <Link to="timer">
        <svg className="opacity-75 fill-electric-violet-950"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-hourglass"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a2 2 0 0 1 1.995 1.85l.005 .15v2a6.996 6.996 0 0 1 -3.393 6a6.994 6.994 0 0 1 3.388 5.728l.005 .272v2a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2a6.996 6.996 0 0 1 3.393 -6a6.994 6.994 0 0 1 -3.388 -5.728l-.005 -.272v-2a2 2 0 0 1 1.85 -1.995l.15 -.005h10z" /></svg>        
      </Link>    
    </>   
  )
}
