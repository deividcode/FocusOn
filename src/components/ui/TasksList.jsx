export const TasksList = ({tasks}) => {
   
   return (
      <ul className="flex flex-col gap-3.5 mt-10">
         {
            tasks.map((task) => {
               return (
                  <li className="grid gap-1 p-3 bg-electric-violet-200 text-sm rounded-md" key={task.id}>
                     <div className="flex gap-2 items-start">
                        <div>
                           <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                           <p>
                              {task.name} 
                           </p>
                           <p className="text-xs text-slate-600">
                              {task.description} 
                           </p>
                        </div>
                     </div>
                  </li>
               )
            })
         }
      </ul>
   )
}
