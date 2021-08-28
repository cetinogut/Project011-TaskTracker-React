
import {Task} from "./Task";

export default function Tasks({tasks, onDelete, onEdit, toggleDone}) {
    
    return (
        <div>
            {
                /* tasks.map((task) => (
                    <h3 key={task.id}>{task.text}</h3>
                )) */
                /* tasks.map((task) => {
                    return <h3 key={task.id}>{task.text}</h3>
                }) */
                /* tasks.map((task) => <h3 key={task.id}>{task.text}</h3>) */
                tasks.map((task) =>
                 <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} toggleDone={toggleDone}/>)
            }
            
        </div>
    )
}
