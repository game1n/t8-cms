import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import routerPaths from './index';
import { NotFound } from './NotFound';
import Home from '../screens/Home';
import Login from '../screens/Login';
const RouterConfig = () => {
	const [sessionPersist, setSessionPersist] = useState<any>(null);
	useEffect(() => {
			const sessionData: any =  localStorage.getItem('persist-session');
			setSessionPersist(JSON.parse(sessionData));
	}, [])
	const NonAuthPages = () => {
		return (
			<Routes>
				<Route path='/' element={<Navigate to={routerPaths.Login} />} />
				<Route path='/home' element={<Navigate to={routerPaths.Login} />} />
				<Route path={routerPaths.Login} element={<Login />} />
				<Route path={routerPaths.NoRouteFound} element={<NotFound />} />
			</Routes>
		);
	}
	const AuthPages = () => {
		return (
			<Routes>
				<Route path='/login' element={<Navigate to={routerPaths.Home} />} />
				<Route path='/' element={<Navigate to={routerPaths.Home} />} />
				<Route path={routerPaths.Home} element={<Home />} />
			</Routes>
		);
	}
	console.log(sessionPersist?.session);
	return (
		sessionPersist?.session ? <AuthPages /> : <NonAuthPages />
	);
};

export default RouterConfig;
