import { Link } from "react-router-dom"

export const MenuMobile = () => {
  return (
    <div className="flex gap-7 justify-evenly items-center" style={{display: "flex", gap: "1.6em"}}>
        <Link to="/">
          <img src="/src/assets/square-check.svg" alt="" srcset="" />
        </Link>    

        <Link to="timer">
          <img src="/src/assets/hourglass.svg" alt="" />
        </Link>    
    </div>   
  )
}
