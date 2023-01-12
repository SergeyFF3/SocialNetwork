import {LoginForm} from 'features/authByUsername';
import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './AuthPage.module.scss'

interface AuthPageProps {
    className?: string
}

const AuthPage = (props: AuthPageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <LoginForm/>
        </div>
    );
};

export default React.memo(AuthPage);