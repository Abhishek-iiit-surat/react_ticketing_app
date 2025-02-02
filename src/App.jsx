import { useContext, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

function App() {
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const validateAuth = (email, password, key) => {
    for (let element of authData[0][key]) {
      if (element.email === email && element.password === password) {
        return element;
      }
    }
    return null;
  };

  // Handle login logic
  const handleLogin = (email, password) => {
    if (authData && validateAuth(email, password, "admin")) {
      setUser('Admin');
    } else if (authData) {
      let employee = validateAuth(email, password, "employees")
      if (employee) {
        setLoggedInUserData(employee)
        setUser('Employee');
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'Admin' && <AdminDashboard />}
      {user === 'Employee' && <EmployeeDashboard data={loggedInUserData} />}
      {/* <Popup></Popup> */}
    </>
  );
}

export default App;
