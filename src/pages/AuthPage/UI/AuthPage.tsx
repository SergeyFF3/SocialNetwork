import {LoginForm} from 'features/authByUsername';
import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './AuthPage.module.scss'
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import Text from "shared/UI/Text/Text";

interface AuthPageProps {
    className?: string
}

const AuthPage = (props: AuthPageProps) => {

    const {
        className
    } = props

    const authPage = useSelector(getUserAuthData)

    if (authPage) {
        return (
            <div className={classNames(cls.AuthPage, {}, [className])}>
                <Text title='Вы авторизованы'/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <LoginForm/>
        </div>
    );
};

export default React.memo(AuthPage);