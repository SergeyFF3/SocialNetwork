import React from 'react';
import cls from './NavbarItem.module.scss'
import AppLink from "shared/UI/AppLink/AppLink";
import {NavbarItemsType} from "../../model/types/navbar";

interface NavbarItemProps {
    item: NavbarItemsType
}

const NavbarItem = (props: NavbarItemProps) => {

    const {
        item
    } = props

    return (
        <AppLink
            className={cls.link}
            to={item.path}
        >
            {item.text}
        </AppLink>
    );
};

export default React.memo(NavbarItem);