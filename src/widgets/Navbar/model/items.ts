import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface NavbarItemsType {
    path: string
    text: string
}

export const NavbarItemList: NavbarItemsType[] = [
    {
        path: RoutePath.profile,
        text: 'Профиль'
    },
    {
        path: RoutePath.search,
        text: 'Пользователи'
    }
]