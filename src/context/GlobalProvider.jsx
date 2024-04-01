import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
   tasks: [],   
}

export const TaskContext = createContext()

export const GlobalProvider = ({children}) => { 

   const [state, dispatch] = useReducer(AppReducer, initialState, () => {
      const tasksJson = localStorage.getItem('tasks')
      return tasksJson ? JSON.parse(tasksJson) : initialState
   })
   
   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(state) )
   }, [state])
   

   const addTask = (task) => {           
      dispatch({
         type: 'ADD_TASK',
         payload: task
      })     
   }

   const changeStatusTask = (id) => { 
      
      dispatch({
         type: 'CHANGE_STATUS_TASK',
         payload: id
      })

   }

   const deleteTask = (id) => { 
   
      dispatch({
         type: 'DELETE_TASK',
         payload: id
      })

   }

   return(
      <TaskContext.Provider 
         value={{
               tasks: state.tasks, 
               addTask,
               changeStatusTask,
               deleteTask
            }}
         >
         {children}
      </TaskContext.Provider>

   )
}