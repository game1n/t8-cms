import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routerPaths from './index';
import { NotFound } from './NotFound';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Post from '../screens/Post';

import { getSupabaseData } from '../services/supabase.service';

const NonAuthPages = (): ReactElement => (
  <Routes>
    <Route path="/" element={<Navigate to={routerPaths.Login} />} />
    <Route path="/home" element={<Navigate to={routerPaths.Login} />} />
    <Route path="/posts" element={<Post />} />
    <Route path={routerPaths.Login} element={<Login />} />
    <Route path={routerPaths.NoRouteFound} element={<NotFound />} />
  </Routes>
);

const AuthPages = (): ReactElement => (
  <Routes>
    <Route path="/login" element={<Navigate to={routerPaths.Home} />} />
    <Route path="/" element={<Navigate to={routerPaths.Home} />} />
      <Route path={routerPaths.Home} element={<Home />} />
  </Routes>
);

const RouterConfig = (): ReactElement => {
  const { session } = getSupabaseData();
  return session ? <AuthPages /> : <NonAuthPages />;
};

export default RouterConfig;
