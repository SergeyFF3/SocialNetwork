import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './RegisterPage.module.scss'
import {RegisterForm} from "features/Registration";

interface RegisterPageProps {
    className?: string
}

const RegisterPage = (props: RegisterPageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.RegisterPage, {}, [className])}>
           <RegisterForm/>
        </div>
    );
};

export default React.memo(RegisterPage);