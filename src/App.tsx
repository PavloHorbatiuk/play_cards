
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/404Error/404ErrorPage';
import Login from './components/auth/Login/Login';
import Registration from './components/auth/Registration/Registration';
import LinearDeterminate from './components/featers/loader/LinearDeterminate';
import Profile from './components/profile/Profile';
import { PATH } from './enums/routs';
import { theme } from './MaterialUIStyle';
import { initializedAppTC } from './store/auth/auth-reducers';
import { useAppSelector } from './store/state';
import s from './App.module.scss'
import Loader from './store/loader/Loader';




function App() {
  const featuresState = useAppSelector(state => state.features)
  const state = useAppSelector(state => state.login)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializedAppTC())
  }, [])


  // if (!state.initializedApp) {
  //   return <Loader />
  // }







  return (
    <div >
      <ThemeProvider theme={theme}>
        {featuresState.status === 'loading' && < LinearDeterminate />}
        <Routes>
          <Route path={PATH.REGISTRATION} element={<Registration />} />
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
