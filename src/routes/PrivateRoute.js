import React from 'react'
import { Navigate } from 'react-router-dom';
import { getDataFromLocal } from '../utils/LocalStorage';

const PrivateRoute = ({ children }) => {
    const currentUser = getDataFromLocal("currentUser") ? getDataFromLocal("currentUser") : {};
    return currentUser?.userName ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;