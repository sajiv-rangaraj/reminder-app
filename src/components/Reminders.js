import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReminder } from '../redux/reducer/reminderReducer';
import editIcon from '../images/edit.png';
import deleteIcon from '../images/delete.png';

const Reminders = (props) => {
  const reminderDatas = useSelector((state => state.reminderReducer));
  const dispatch = useDispatch();
  const handleEditReminder = (e) => {
    const reminder = reminderDatas?.find(reminderData => reminderData.id === e.target.id);
    props.setReminderDate(reminder.date);
    props.setReminderDesc(reminder.description);
    props.setReminderId(reminder.id);
    props.setEdit(true);
  }

  const handleDeleteReminder = (e) => {
    const reminder = reminderDatas?.find(reminderData => reminderData.id === e.target.id);
    dispatch(deleteReminder(reminder));
  }
  return (
    <div className='reminders_list_view'>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Reminders</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reminderDatas?.map((reminderData, key) => {
            return(
              <tr key={reminderData.id}>
                <td>{key + 1}</td>
                <td>{reminderData.date}</td>
                <td>{reminderData.description}</td>
                <td>
                    <img className='del_button' alt='editIcon' src={editIcon} id={reminderData.id} onClick={(e) => { handleEditReminder(e) }} />
                </td>
                <td>
                    <img className='edit_button' alt='deleteIcon' src={deleteIcon} id={reminderData.id} onClick={(e) => { handleDeleteReminder(e) }} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Reminders;
