import "../Registration/Registration.css"
import '../MainPage.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../../Components/Sidebar";
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];
const subjects = ['Java', 'C', 'OS'];



const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];


const Registration = () => {
  const [assistantType, setAssistantType] = useState('');
  const [workSchedule, setWorkSchedule] = useState('');
  const [isQuestionTwoAnswered, setIsQuestionTwoAnswered] = useState(false);
  const [semesterHours, setSemesterHours] = useState(0);
  //const [freeTime, setFreeTime] = useState('');
  const [vacationDay, setVacationDay] = useState('');
  const [labHours, setLabHours] = useState(0);
  const [subjectHours, setSubjectHours] = useState(0);
  const [classesTaught, setClassesTaught] = useState(0);
  const [subjectsTaught, setSubjectsTaught] = useState([]);
  const [residence, setResidence] = useState('');
  const [academicYear, setAcademicYear] = useState('');

  const [freeTime, setFreeTime] = useState([]);


  const minHours = (assistantType === 'No' && workSchedule === 'Full-Time') ? 16 
                : (assistantType === 'No' && workSchedule === 'Part-Time') ? 6 
                : 2;
  
  const maxHours = (assistantType === 'No' && workSchedule === 'Full-Time') ? 18 
                : (assistantType === 'No' && workSchedule === 'Part-Time') ? 8 
                : 6;

  useEffect(() => {
    setSemesterHours(minHours);
    setIsQuestionTwoAnswered(workSchedule !== '');
  }, [assistantType, workSchedule, minHours]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      assistantType,
      workSchedule,
      semesterHours,
      freeTime,
      vacationDay,
      labHours,
      subjectHours,
      classesTaught,
      subjectsTaught,
      residence,
      academicYear
    };
    try {
      await axios.post('/api/storeData', formData);
      console.log('Data stored successfully!');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const handleSubjectChange = (event) => {
    if(event.target.checked){
      setSubjectsTaught([...subjectsTaught, event.target.value]);
    } else {
      setSubjectsTaught(subjectsTaught.filter(subject => subject !== event.target.value));
    }
  };




  const handleCheckboxChange = (event) => {
    const selectedDay = event.target.value;
    if (event.target.checked) {
      setFreeTime([...freeTime, selectedDay]);
    } else {
      setFreeTime(freeTime.filter((day) => day !== selectedDay));
    }
  };
  return (
   // <div><h2>New Semester Schedule </h2> </div>
    <div >
      <Sidebar/>
      <h2 className='NewSemesterSchedule'>New Semester Schedule </h2>
      <div>
      <form className="Registration"onSubmit={handleSubmit}>
        <p> Are you a scholarship assistant?</p>

        <label>
          <input
            type="radio"
            name="assistantType"
            value="Yes"
            checked={assistantType === 'Yes'}
            onChange={(e) => setAssistantType(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="assistantType"
            value="No"
            checked={assistantType === 'No'}
            onChange={(e) => setAssistantType(e.target.value)}
          />
          No
        </label>

        {assistantType === 'No' && (
          <>
            <p>Do you work part-time or full-time?</p>
            <label>
              <input
                type="radio"
                name="workSchedule"
                value="Full-Time"
                checked={workSchedule === 'Full-Time'}
                onChange={(e) => setWorkSchedule(e.target.value)}
              />
              Full-Time
            </label>
            <label>
              <input
                type="radio"
                name="workSchedule"
                value="Part-Time"
                checked={workSchedule === 'Part-Time'}
                onChange={(e) => setWorkSchedule(e.target.value)}
              />
              Part-Time
            </label>
          </>
        )}

        {(assistantType === 'Yes' || assistantType === 'No') && (
          <>
            <p>How many hours would you like (including labs and courses) to register for the semester?</p>
            <input
              type="number"
              min={minHours}
              max={maxHours}
              value={semesterHours}
              onChange={(e) => setSemesterHours(e.target.value)}
              disabled={assistantType === 'No' && !isQuestionTwoAnswered}
            />
          </>
        )}

        {(assistantType === 'Yes' || (assistantType === 'No' && workSchedule === 'Part-Time')) && (
          <div>
            <p>What is your free time?</p>
            {weekdays.map((weekday) => (
        <label key={weekday}>
          <input
            type="checkbox"
            value={weekday}
            checked={freeTime.includes(weekday)}
            onChange={handleCheckboxChange}
          />
          {weekday}
        </label>
      ))}

          </div>
        )}

        {assistantType === 'No' && workSchedule === 'Full-Time' && (
          <div>
            <p>Which day do you prefer for vacation?</p>
            <select value={vacationDay} onChange={(e) => setVacationDay(e.target.value)}>
              {daysOfWeek.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
          </div>
        )}

        <p>How many hours of laps do you want to record?</p>
        <input
          type="number"
          value={labHours}
          onChange={(e) => setLabHours(e.target.value)}
        />

        <p>How many hours of subjects do you want to record?</p>
        <input
          type="number"
          value={subjectHours}
          onChange={(e) => setSubjectHours(e.target.value)}
        />

        <p>How many classes have you taught?</p>
        <input
          type="number"
          value={classesTaught}
          onChange={(e) => setClassesTaught(e.target.value)}
        />

        <p>Which of the following subjects did you teach?</p>
        {subjects.map(subject => (
          <label key={subject}>
            <input
              type="checkbox"
              value={subject}
              checked={subjectsTaught.includes(subject)}
              onChange={handleSubjectChange}
            />
            {subject}
          </label>
        ))}

        <p>Do you live in Ramallah?</p>
        <label>
          <input
            type="radio"
            name="residence"
            value="Yes"
            checked={residence === 'Yes'}
            onChange={(e) => setResidence(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="residence"
            value="No"
            checked={residence === 'No'}
            onChange={(e) => setResidence(e.target.value)}
          />
          No
        </label>

        <p>What is your academic year?</p>
        <input
          type="number"
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Registration;



