import React from 'react'
import { RouteProps } from "react-router-dom";
import {ProfilePage} from "pages/ProfilePage";
import {SearchPage} from "pages/SearchPage";
import {NotFoundPage} from "pages/NotFoundPage";
import AuthPage from "pages/AuthPage/UI/AuthPage";
import {RegisterPage} from "pages/RegisterPage";

enum AppRoutes {
    AUTH = 'auth',
    REGISTER = 'register',
    PROFILE = 'profile',
    SEARCH = 'search',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.AUTH]: '/',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.SEARCH]: '/search',
    [AppRoutes.NOT_FOUND]: '*'
}

// Сами роуты, маршрут для них, компонент который мы должны отрисовывать
// В качестве ключа берем enum AppRoutes, а в качестве значения тип RouteProps - это тип из самого react-router-dom
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.AUTH]: {
        path: '/',
        element: <AuthPage/>
    },
    [AppRoutes.REGISTER]: {
        path: '/register',
        element: <RegisterPage/>
    },
    [AppRoutes.PROFILE]: {
        // path: `${RoutePath.profile}:id`,
        path: '/profile',
        element: <ProfilePage/>
    },
    [AppRoutes.SEARCH]: {
        path: '/search',
        element: <SearchPage/>
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}