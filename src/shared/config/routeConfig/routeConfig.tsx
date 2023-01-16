import React from 'react'
import {RouteProps} from "react-router-dom";
import {ProfilePage} from "pages/ProfilePage";
import {SearchPage} from "pages/SearchPage";
import {NotFoundPage} from "pages/NotFoundPage";
import AuthPage from "pages/AuthPage/UI/AuthPage";
import {RegisterPage} from "pages/RegisterPage";
import EditPage from "pages/EditPage/UI/EditPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    AUTH = 'auth',
    REGISTER = 'register',
    EDIT = 'edit',
    PROFILE = 'profile',
    SEARCH = 'search',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.AUTH]: '/',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.EDIT]: '/edit',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.SEARCH]: '/search',
    [AppRoutes.NOT_FOUND]: '*',
}

// Сами роуты, маршрут для них, компонент который мы должны отрисовывать
// В качестве ключа берем enum AppRoutes, а в качестве значения тип RouteProps - это тип из самого react-router-dom
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage/>
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <RegisterPage/>
    },
    [AppRoutes.EDIT]: {
        path: RoutePath.edit,
        element: <EditPage/>,
        authOnly: true
    },
    [AppRoutes.PROFILE]: {
        // path: `${RoutePath.profile}:id`,
        path: RoutePath.profile,
        element: <ProfilePage/>,
    },
    [AppRoutes.SEARCH]: {
        path: RoutePath.search,
        element: <SearchPage/>,
        authOnly: true
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },
}