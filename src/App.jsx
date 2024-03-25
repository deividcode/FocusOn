import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./routes/HomeScreen";
import { TimerScreen } from "./routes/TimerScreen";
import { MenuMobile } from "./routes/components/MenuMobile";
import { Header } from "./routes/components/Header";
import { GlobalProvider } from "./context/GlobalProvider";



export const App = () => {
  return (
    <div className="flex flex-col bg-electric-violet-50" style={{height: "100vh"}}>           
      <header className="py-4">
        <Header className="flex-none" />
      </header>

      <div className="p-5 grow">
         
        <Routes>
          <Route path="/" element={<GlobalProvider><HomeScreen></HomeScreen></GlobalProvider>}></Route>
          <Route path="timer" element={<TimerScreen></TimerScreen>}></Route>
          <Route path="/" element={<Navigate to="./"></Navigate>}></Route>
        </Routes>
          
      </div>          

      <div className="h-12 flex gap-7 justify-evenly items-center">
        <MenuMobile className="flex-none h-12"  />        
      </div>
    </div>
  )
}

