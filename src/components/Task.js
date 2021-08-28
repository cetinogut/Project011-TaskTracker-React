import { BsFillTrashFill } from "react-icons/bs"
import { BsExclamationCircleFill } from "react-icons/bs"
import { BsPencil} from "react-icons/bs"
import { switchCategoryIconComponent} from '../helpers/CategoryIconMapper'


import Tooltip from "./tooltip/Tooltip";


export const Task = ({task, onDelete, onEdit, toggleDone}) => {
    return (
        <div className={`task ${task.isDone ? "done" : ""}`}
         onDoubleClick ={() => toggleDone(task.id)}>
            <div className="task-line">
                <h3>
                    {task.text}
                </h3>
                <div className="edit-buttons">
                  <Tooltip content="click for deleting" direction="top">
                    <BsFillTrashFill className="icons icon-red" 
                    onClick={() =>onDelete(task.id)}/>
                  </Tooltip>
                  <Tooltip content="click for editing(TODO)" direction="top">
                    <BsPencil className="icons icon-green"
                    onClick={() =>onEdit(task.id)}/>
                  </Tooltip>
                </div>
                
            </div>
            <div className="task-line"> 
              <p>
                {task.category} 
              </p>
                <span>{switchCategoryIconComponent(task.category)}</span>

            </div>
            <p>{task.endDate.toString()}</p>
            
        </div>
    )
}