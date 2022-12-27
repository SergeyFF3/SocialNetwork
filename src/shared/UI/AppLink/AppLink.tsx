import React, {PropsWithChildren} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string
}

const AppLink: React.FC<PropsWithChildren<AppLinkProps>> = (props) => {

    const {
        className,
        children,
        to,
        ...otherProps
    } = props

    return (
        <Link
            className={classNames(cls.AppLink, {}, [className])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default React.memo(AppLink);