
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/404Error/404ErrorPage';
import Login from './components/auth/Login/Login';
import Registration from './components/auth/Registration/Registration';
import LinearDeterminate from './components/featers/loader/LinearDeterminate';
import Profile from './components/profile/Profile';
import { PATH } from './enums/routs';
import { theme } from './MaterialUIStyle';
import { useAppSelector } from './store/state';




function App() {
  const featuresState = useAppSelector(state => state.features)
  const state = useAppSelector(state => state.login)
  useEffect(() => {
    if (!state.isLoggedIn) {
      return;
    }
  }, [])

  return (
    <div >
      <ThemeProvider theme={theme}>
        {featuresState.status === 'loading' && < LinearDeterminate />}
        <Routes>
          <Route path={PATH.REGISTER} element={<Registration />} />
          < Route path={PATH.MAIN} element={< Profile />} />
          < Route path={PATH.PROFILE} element={< Profile />} />
          < Route path={PATH.LOGIN} element={< Login />} />
          < Route path={PATH.ERROR} element={<PageNotFound />} />
          < Route path={PATH.WRONG_PAGE} element={< Navigate to={PATH.ERROR} />} />
        </Routes >
      </ThemeProvider >
    </div >
  );
}

export default App;
