import { createContext, Provider, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
   tasks: [],   
}

export const TaskContext = createContext()

export const GlobalProvider = ({children}) => { 

   const [state, dispatch] = useReducer(AppReducer, initialState)
   
   const addTask = (task) => { 
      console.log(task)      

      dispatch({
         type: 'ADD_TASK',
         payload: task
      })
      console.log('addTask')
   }

   return(
      <TaskContext.Provider 
         value={{
               tasks: state.tasks, 
               addTask
            }}
         >
         {children}
      </TaskContext.Provider>

   )
}