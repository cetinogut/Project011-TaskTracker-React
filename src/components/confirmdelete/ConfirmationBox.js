/* define the state */

import  { useState } from "react"

const [delTask, setDelTask] = useState(false)

/* if delTask is false, change the display properties of our 
 * two elements and change delTask to true, so that next time 
 * the function is called, the elements are hidden again
 */

export const handleConfirmationBox = () => {
  if (!delTask) {
    document.querySelector(".confirm-bg").style.display = "flex"
    document.querySelector(".container").style.display = "flex"
    setDelTask(true)
  } else {
    document.querySelector(".confirm-bg").style.display = "none"
    document.querySelector(".container").style.display = "none"
    setDelTask(false)
  }
}