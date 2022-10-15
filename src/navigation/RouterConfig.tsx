import React, { ReactElement, useEffect, useReducer } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routerPaths from './index';
import { NotFound } from './NotFound';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Post from '../screens/Post';
import Publish from '../screens/Publish';
import { getSupabaseData } from '../services/supabase.service';
import { userDetailsInitialState } from '.././constants/user.constants';
import { getUserDetails } from '.././services/user';
import UserContext from '../store/userContext';
import UserReducer from '../reducers/user/reducer';
import { UPDATE_USER_DETAILS } from '../reducers/user/action';
const NonAuthPages = (): ReactElement => (
  <Routes>
    <Route path="/" element={<Navigate to={routerPaths.Login} />} />
    <Route path="/home" element={<Navigate to={routerPaths.Login} />} />
    <Route path="/posts" element={<Post />} />
    <Route path={routerPaths.Login} element={<Login />} />
    <Route path={routerPaths.NoRouteFound} element={<NotFound />} />
  </Routes>
);

const AuthPages = (): ReactElement => {
  return (
    <Routes>
      <Route path="/login" element={<Navigate to={routerPaths.Home} />} />
      <Route path="/" element={<Navigate to={routerPaths.Home} />} />
      <Route path={routerPaths.Home} element={<Home />} />
      <Route path={routerPaths.Publish} element={<Publish />} />
    </Routes>
  );
};

const RouterConfig = (): ReactElement => {
  const { session } = getSupabaseData();
  const [userState, userDispatch] = useReducer(
    UserReducer,
    userDetailsInitialState
  );
  const provideState = {
    userState,
    userDispatch,
  };
  const fetchUserDetails = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    getUserDetails(session?.user.id as string)
      .then((response) => {
        userDispatch({ type: UPDATE_USER_DETAILS, payload: response });
        if (response.length === 0) {
          console.log('triggered');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return session ? (
    <UserContext.Provider value={provideState}>
      <AuthPages />
    </UserContext.Provider>
  ) : (
    <NonAuthPages />
  );
};

export default RouterConfig;
