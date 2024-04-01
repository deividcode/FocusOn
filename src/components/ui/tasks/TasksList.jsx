import { ItemTask } from "./ItemTask";

export const TasksList = ({ tasks }) => {
    
  return (

    <ul className="flex flex-col gap-3.5 mt-5">
      {tasks.map((task) => <ItemTask key={task.id} task={task} />)}
    </ul>
  );
};
