import { BsFillTrashFill } from "react-icons/bs"
import { BsExclamationCircleFill } from "react-icons/bs"
import { BsPencil} from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { FaSchool } from "react-icons/fa"
import { FaAddressBook } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa"

import Tooltip from "./tooltip/Tooltip";

const switchComponent = ( switchParam ) => {
    let component;
    console.log(switchParam);
    switch (switchParam) {
      case "Home":
        component = <FaHome/>;
        break;
      case "School":
        component = <FaSchool/>;
        break;
      case "Office":
      case "Friends":
        component = <FaAddressBook/>;
        break;
      case "General":
        component = <FaGlobe/>;
        break;
      default:
        console.log("Unknwon switch param: ", switchParam);
    }
    console.log(component);
    return component;
  };

export const Task = ({task, onDelete, onEdit, toggleDone}) => {
    return (
        <div className={`task ${task.isDone ? "done" : ""}`}
         onDoubleClick ={() => toggleDone(task.id)}>
            <div className="task-first-line">
                <h3>
                    {task.text}
                </h3>
                <div className="edit-buttons">
                  <Tooltip content="click for deleting" direction="top">
                    <BsFillTrashFill style = {{ color: "red", cursor:"pointer"}} 
                    onClick={() =>onDelete(task.id)}/>
                  </Tooltip>
                  <Tooltip content="click for editing(TODO)" direction="top">
                    <BsPencil style = {{ color: "green", cursor:"pointer"}}
                    onClick={() =>onEdit(task.id)}/>
                  </Tooltip>
                </div>
                
            </div>
            
            {/* <p>{task.category} <BsExclamationCircleFill/></p> */}
            <p>{task.category} {switchComponent(task.category)}</p>
            
            <p>{task.endDate.toString()}</p>
            
        </div>
    )
}