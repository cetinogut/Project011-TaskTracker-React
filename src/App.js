import './App.css';
import {useState} from 'react';
import {initialState} from "./store/initialStates";
import Header from './components/Header';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';


function App() {
  const [tasks, setTasks] = useState(initialState); // to list the tasks
  const [isTaskBarShowed, setIsTaskBarShowed] = useState(false); // to toggle create form


// create a task
const onCreate = (task) => {
  const uniqID = Date.now(); // unique id için kullandık
  const newTask ={uniqID, ...task}
  console.log(`newTask`, newTask)
  setTasks((prevState) =>[...prevState, newTask]) // prevState can be called whatever we like
}
// edit task .. this a TODO.. currently the code below toggles the isCompleted..
const onEdit = (id) => 
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, isDone: !task.isDone} : task
    )
  );

// delete tasks
const onDelete = (id) => setTasks(tasks.filter((task) => task.id !== id));

// toggle done
const toggleDone = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, isDone: !task.isDone} : task
    )
  );
};

// toggle show and title
const toggleShow = () => setIsTaskBarShowed((prevState) => !prevState);

  return (
    <div className="container">
      
      <Header title={"Task Tracker"} 
      isTaskBarShowed={isTaskBarShowed}
      toggleShow={toggleShow}
      />
      
      {isTaskBarShowed && <CreateTask onCreate={onCreate} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete= {onDelete} onEdit={onEdit} toggleDone={toggleDone}/>
      ):
      (
        <p> No task to show</p>
      )}
     
    </div>
  );
}

export default App;
