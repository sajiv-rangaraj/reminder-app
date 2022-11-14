import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import '../styles/AddReminder.css'
import { useDispatch } from 'react-redux';
import { addreminder, updateReminder } from '../redux/reducer/reminderReducer';
import { v4 as uuid } from 'uuid';
import { getDataFromLocal } from '../utils/LocalStorage';
// import emailjs from 'emailjs-com'


const AddReminder = (props) => {
  const [reminderDate, setReminderDate] = useState('');
  const [reminderDescription, setReminderDescription] = useState('');
  const [reminderId, setReminderId] = useState('');
  const dispatch = useDispatch();
  const userDetails = getDataFromLocal('currentUser');

  useEffect(() => {
    setReminderDate(props.reminderDate);
    setReminderDescription(props.reminderDesc);
    setReminderId(props.reminderId)
  }, [props.reminderDesc, props.reminderDate, props.reminderId]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'date':
        setReminderDate(e.target.value);
        break;
      case 'description':
        setReminderDescription(e.target.value);
        break;
      default:
        break;
    }
  }
  // const sendMail = (reminderDetails) => {
  //   emailjs.sendForm(
  //     "service_pjfpeie",
  //     "template_sh1f3lq",
  //     reminderDetails,
  //     "f7zraZSfaSRgwT70f"
  //   )
  //     .then((result) => {
  //       console.log(result.data);
  //     }).catch((error) => {
  //       console.log(error.message);
  //     })
  // }

  const handleClick = () => {
    let reminderDetails = {
      date: reminderDate,
      description: reminderDescription,
      id: props.edit ? reminderId : uuid(),
      userId: userDetails.id,
      email: userDetails.mail
    };
    // sendMail(reminderDetails);
    props.edit ? dispatch(updateReminder(reminderDetails)) : dispatch(addreminder(reminderDetails));
    setReminderDate('');
    setReminderDescription('');
    props.setReminderDate('');
    props.setReminderDesc('');
    props.setReminderId('')
    props.setEdit(false);
  }

  return (
    <div className='add_reminder_popup d-flex align-items-center justify-content-around my-4'>
      <div className='reminder_input d-flex w-50 justify-content-around'>
        <InputField className='reminder_input_date' name="date" type="date" label='Date' onChange={handleChange} value={reminderDate} />
        <InputField className="reminder_input_des" name="description" type="text" label='Enter Your Text' onChange={handleChange} value={reminderDescription} />
      </div>
      <button className='add_reminder_btn' onClick={handleClick} >AddReminder</button>
    </div>
  )
};

export default AddReminder;