import logo from './logo.svg';
import { /* MUI components */ } from '@mui/material';
import { /* MUI icons */ } from '@mui/icons-material';
import { styled } from '@emotion/styled';
import { /* Emotion React components */ } from '@emotion/react';
import { /* Recharts components */ } from 'recharts';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import Cookies from './Cookies';
import Tranzactii from './Tranzactii';
import Oferte from './Oferte';
import { BrowserRouter as Router , Routes, Route, useNavigate} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css'
import './App.css';
import Form from './Form';


function App() {
  
  // const { token, setToken } = useToken();

  return (
    <Router>
      <Routes>
        {/* <Dashboard></Dashboard> */}
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/transactions" element={<Tranzactii/>} />
      <Route path='/cookies' element={<Cookies/>} />
      <Route path='/licitations' element={<Form/>} />
      <Route path='/offers' element={<Oferte/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
