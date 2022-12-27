import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './NavbarItem.module.scss'

interface NavbarItemProps {
    className?: string
}

const NavbarItem = (props: NavbarItemProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.NavbarItem, {}, [className])}>
           
        </div>
    );
};

export default React.memo(NavbarItem);