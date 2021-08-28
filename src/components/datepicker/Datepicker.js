import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from 'react'

const Datepicker = () => {
    const [endDate, setEndDate] = useState(new Date());
    //const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    );
  };

export default Datepicker
