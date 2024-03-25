import { useState, useContext } from "react"
import { FormInput } from "../components/ui/FormInput"
import { TaskContext } from "../context/GlobalProvider";
import { TasksList } from "../components/ui/TasksList";

export const HomeScreen = () => {
 
  const {tasks, addTask} = useContext(TaskContext)
  
  const [nameTask, setNameTask] = useState("") 
  const [description, setDescription] = useState("") 

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('aqui')
    addTask({
      id: crypto.randomUUID(),
      name: nameTask,
      description: description
    })
    setNameTask("")
    setDescription("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>        
        <div class="flex flex-col gap-3 mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">              
            <FormInput 
              type="text" 
              name="name-tasks" 
              id="name-tasks" 
              placeholder="Name Tasks" 
              value={nameTask} 
              onChange={(e) => setNameTask(e.target.value)} 
              />
          </div>

          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">              
              <FormInput 
              type="text" 
              name="description-tasks" 
              id="description-tasks" 
              placeholder="Description Tasks" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              />
          </div>                             
        </div>   
        <button className="w-full px-5 py-3 mt-4 text-sm text-electric-50 font-semibold rounded-md text-electric-violet-50 bg-electric-violet-500" type="submit">Create Task</button>     
      </form>
      <div>
        <TasksList tasks={tasks} />
      </div>
    </div>
  )
}
