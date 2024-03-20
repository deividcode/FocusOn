import { Link } from "react-router-dom"

export const MenuMobile = () => {
  return (
    <div style={{display: "flex", gap: "1.6em"}}>
        <Link to="/">Home</Link>    
        <Link to="timer">Timer</Link>    
    </div>   
  )
}
