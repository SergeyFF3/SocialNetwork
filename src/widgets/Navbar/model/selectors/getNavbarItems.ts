import { createSelector } from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {NavbarItemsType} from "../types/navbar";

export const getNavbarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const navbarItemsList: NavbarItemsType[] = [
            {
                path: RoutePath.profile + userData?.id,
                text: 'Профиль'
            },
            {
                path: RoutePath.search,
                text: 'Пользователи'
            }
        ]
        return navbarItemsList
    }
)