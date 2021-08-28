//import DateTimePicker from 'react-datetime-picker' // this is for react-datetime-picker package
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";

import { useState } from 'react'
import { setInput } from  '../helpers/InputHelpers';
import { BsInfoCircleFill } from "react-icons/bs"

import Tooltip from "./tooltip/Tooltip";

export default function CreateTask({onCreate}) {
    const [text, setText] = useState("");
    let [category, setCategory] = useState("")
    //const [date, setDate] = useState(new Date()); // this is for react-datetime-picker package
    
    const [endDate, setEndDate] = useState(new Date());
    //const handleTextChange = (e) => setText(e.target.value) // refactored this line with setInput in helpers folder
    

    
    console.log(`formValues`, {text, endDate})

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text || !endDate){
            alert("please fill both fields")
        } else{
            if(!category){
                category = "Generic"
            } 
            //category ? category : "Generic";
            onCreate({text, endDate, category, isDone:false});
            setText("");
            setCategory("");
            setEndDate(new Date());
        }
        
    };

    return (
        <form className="add-form" onSubmit ={onSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            id="task"
            name="text"
            type="text"
            placeholder="Enter a task name"
            // required
            value={text}
            onChange={setInput(setText)}
            //onChange={handleTextChange}
            
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Task Category  
            <Tooltip content="Default will be 'Generic'!" direction="right">
                <BsInfoCircleFill style = {{ color: "white", cursor:"pointer"}}/>
            </Tooltip>
          </label>
           <select
            value={category}
            onChange={setInput(setCategory)}
            //style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          >
            <option value="">Select a Category</option>
            <option value="Home">Home</option>
            <option value="School">School</option>
            <option value="Office">Office</option>
            <option value="Friends">Friends</option>
            <option value="Generic">Generic</option>
          </select>
        </div>
        {/* <div className="form-control"> // this is for react-datetime-picker package
          <label htmlFor="date">Date-Time Picker</label>
          <DateTimePicker
            className = "datetime"
            id="date"
            name="date"
            value={date}
            onChange={setDate}
            maxDetail="minute"
            //locale="tr-TR"
            format="dd-MM-y h:mm"
            amPmAriaLabel= "Select AM/PM"
          />
        </div> */}
        <div className="form-control">
          <label htmlFor="date">Planned End Date(DatePicker)</label>
          <DatePicker
            className = "datetime"
            id="date"
            name="date"
            
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            //dateFormat="Pp"
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            maxDate={addMonths(new Date(), 2)} //For all the functions used in props, you import them from 'date-fns'.
            showDisabledMonthNavigation
            calendarStartDay={1}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    )
}