import React, { useState } from 'react';
import "../styles/table.css"
import AddReminder from "./AddReminder";
import Reminders from './Reminders';


const Landing = () => {
  const [reminderDate, setReminderDate] = useState('');
  const [reminderDesc, setReminderDesc] = useState('');
  const [reminderId, setReminderId] = useState('');
  const [edit, setEdit] = useState(false);

  

  return (
    <div className='reminder_app_landing_page'>
        <AddReminder 
          reminderDate={reminderDate} 
          setReminderDate={setReminderDate} 
          reminderDesc={reminderDesc} 
          setReminderDesc={setReminderDesc} 
          edit={edit} 
          setEdit={setEdit}
          reminderId={reminderId}
          setReminderId={setReminderId}
        />
        <Reminders 
          reminderDate={reminderDate} 
          setReminderDate={setReminderDate} 
          reminderDesc={reminderDesc} 
          setReminderDesc={setReminderDesc} 
          edit={edit} 
          setEdit={setEdit}
          reminderId={reminderId}
          setReminderId={setReminderId}
        />
    </div>
  )
};

export default Landing;