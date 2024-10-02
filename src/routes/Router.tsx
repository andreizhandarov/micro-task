import * as React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, Navigate, Outlet, RouteObject} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Login } from "../components/pages/Login";
import { PrivateRoutes } from "./PrivateRoute";


export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/:model/:id',
    PRISES: '/prises',
    PROTECTEDPAGE: '/protactedpage',
    LOGIN: '/login',
    ERROR404: '/error404'
} as const

const publicRoures: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas />,
    },
    {
        path: PATH.PUMA,
        element: <Puma />,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas />,
    },
    {
        path: PATH.PRISES,
        element: <Prices />,
    },
    {
        path: PATH.MODEL,
        element: <Model />,
    },
    {
        path: PATH.LOGIN,
        element: <Login />,
    },
    {
        path: PATH.ERROR404,
        element: <Error404 />,
    },
]

const privateRoures: RouteObject[] = [
    {
        path: PATH.PROTECTEDPAGE,
        element: <ProtectedPage/>
    },
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Navigate to ={PATH.ERROR404}/>,
        children: [
            {
                path: "/",
                element: <Adidas />,
            },
            {
                element: <PrivateRoutes/>,
                children: privateRoures
            },
            ...publicRoures,
        ]
    }
]);
