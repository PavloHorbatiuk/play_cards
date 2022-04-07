
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login/Login';
import Registration from './components/auth/Registration/Registration';
import Profile from './components/profile/Profile';
import { theme } from './MaterialUIStyle';




function App() {



  return (
    <div >
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='registration' element={<Registration />} />
          < Route path='/' element={< Profile />} />
          < Route path='profile' element={< Profile />} />
          < Route path='login' element={< Login />} />
          < Route path='/404' element={<h1 style={{ textAlign: "center" }}> 404: PAGE NOT FOUND</h1>} />
          < Route path="*" element={< Navigate to='/404' />} />
        </Routes >
      </ThemeProvider >
    </div >
  );
}

export default App;
