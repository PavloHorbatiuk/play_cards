import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login/Login';
import Registration from './components/auth/Registration/Registration';
import Profile from './components/profile/Profile';


export const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: '#1c5fda',

        },
      },
    },
  },
});

function App() {



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='registration' element={<Registration />} />
          < Route path='/' element={< Profile />} />
          < Route path='profile' element={< Profile />} />
          < Route path='login' element={< Login />} />
          < Route path='/404' element={<h1> 404: PAGE NOT FOUND</h1>} />
          < Route path="*" element={< Navigate to='/404' />} />
        </Routes >
      </ThemeProvider >
    </div >
  );
}

export default App;
