import { useState, useContext } from "react"
import { ButtonCreateTask } from "../components/ui/tasks/ButtonCreateTask";
import { ModalTask } from "../components/ui/tasks/ModalTask";
import { TasksList } from "../components/ui/tasks/TasksList";
import { TaskContext } from "../context/GlobalProvider"
import addTaskIllustration from "../assets/add_tasks_illustration.svg";

export const HomeScreen = () => {  

  const {tasks} = useContext(TaskContext)  
  const [isOpen, setIsOpen] = useState(false)

  const completedTasks = tasks.filter((task) => task.status != false )
  const uncompletedTasks = tasks.filter((task) => task.status != true )

  function closeModal() {
    setIsOpen(false)
  }  
  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-sm font-medium opacity-80">Today</p>
          <div className="">
            {
              uncompletedTasks.length == "" 
              ? (
                <>
                  <img src={addTaskIllustration} className="pt-12 opacity-20" alt="" />
                         
                  <p className="mt-3 text-center font-medium	opacity-20">Create Your First Task</p>
                </>
              )
              : ( <TasksList tasks={uncompletedTasks} />)            
            }
          </div>
        </div>

        <div>
          <p className="text-sm font-medium opacity-60">Task Completed</p>
          <div className="">
            {
              <TasksList tasks={completedTasks} />            
            }
          </div>
        </div>
      </div>
      
      <ModalTask isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} closeModal={closeModal} />
      
      <ButtonCreateTask isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} closeModal={closeModal} /> 
    
    </div>
  )
}
