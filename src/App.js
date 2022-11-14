import React from "react";
import RoutePages from "./routes/routes";
import "./styles/app.css"
import { clearDataFromLocal } from "./utils/LocalStorage";
import Logout from './images/logout.png'
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state => state.userReducer.checkUser))
  const handleLogout =() => {
    clearDataFromLocal('currentUser');
    window.location.reload();
  }
  
  return (
      <div className="reminder_app"> 
        <div className="reminder_app_heading_div w-100 d-flex py-5"> 
          <h1 className="reminder_app_heading m-auto">Reminder App</h1>
          {currentUser && <img className="logout_image mx-4" src={Logout} alt="Logout" onClick={handleLogout}/>}
        </div>
        <RoutePages/> 
      </div>
  );
}

export default App;
