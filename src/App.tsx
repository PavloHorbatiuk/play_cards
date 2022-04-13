
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/404Error/404ErrorPage';

import Registration from './components/auth/Registration/Registration';
import LinearDeterminate from './components/featers/loader/LinearDeterminate';
import Profile from './components/profile/Profile';
import { PATH } from './enums/routs';
import { theme } from './MaterialUIStyle';
import { initializedApp } from './store/auth/auth-reducers';
import { useAppSelector } from './store/state';
import Loader from './store/loader/Loader';
import { Login } from './components/auth/Login/Login';
import RecoveryPassword from './components/auth/RecoveryPassword/RecoveryPassword';





function App() {
  const featuresState = useAppSelector(state => state.features)
  const initialized = useAppSelector(state => state.login)
  const isAuth = useAppSelector(state => state.login.isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(initializedApp())
  }, [])


  if (!initialized.initializedApp) {
    return <Loader />

  }

  return (
    <div >
      <ThemeProvider theme={theme}>
        {featuresState.status === 'loading' && < LinearDeterminate />}
        <Routes>
          <Route path={PATH.REGISTRATION} element={<Registration />} />
          < Route path={PATH.MAIN} element={< Profile />} />
          < Route path={PATH.PROFILE} element={< Profile />} />
          < Route path={PATH.LOGIN} element={< Login />} />
          < Route path={PATH.RECOVERY_PASSWORD} element={< RecoveryPassword />} />
          < Route path={PATH.ERROR} element={<PageNotFound />} />
          < Route path={PATH.WRONG_PAGE} element={< Navigate to={PATH.ERROR} />} />
        </Routes >
      </ThemeProvider >
    </div >
  );
}

export default App;
