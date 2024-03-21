import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./routes/HomeScreen";
import { TimerScreen } from "./routes/TimerScreen";
import { MenuMobile } from "./routes/components/MenuMobile";
import { Header } from "./routes/components/Header";
export const App = () => {
  return (
    <div className="grid items-center" style={{height: "100vh"}}>           
      <Header />

      <div className="p-5">
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="timer" element={<TimerScreen></TimerScreen>}></Route>
          <Route path="/" element={<Navigate to="./"></Navigate>}></Route>
        </Routes>
      </div>    

      <MenuMobile />        
    </div>
  )
}

