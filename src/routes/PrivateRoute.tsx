import * as React from 'react';
import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from './Router';

type Props = {
    children: ReactNode
};

export const PrivateRoutes = () => {
    const isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};




