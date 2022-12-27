import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink from "shared/UI/AppLink/AppLink";
import ThemeSwitcher from "widgets/ThemeSwitcher/ThemeSwitcher";
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import Button, {ThemeButton} from "shared/UI/Button/Button";
import {useNavigate} from 'react-router-dom';

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {

    const {className} = props

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const authData = useSelector(getUserAuthData)

    const onLogout = React.useCallback(() => {
        dispatch(userActions.logout())
        navigate('/')
    }, [dispatch, navigate])

    if (authData) {
        return (
            <div className={classNames(cls.NavbarWrapper, {}, [className])}>
                <div className={cls.container}>
                    <div className={cls.logo}>
                        Netty
                    </div>
                    <menu>
                        <AppLink className={cls.link} to='/profile'>Profile</AppLink>
                        <AppLink className={cls.link} to='/search'>Search</AppLink>
                    </menu>
                    <div className={cls.switcher}>
                        <ThemeSwitcher/>
                        <Button
                            className={cls.btn}
                            theme={ThemeButton.CLEAR}
                            onClick={onLogout}
                        >
                            Выйти
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.NavbarWrapper, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.logo}>Netty</div>
                <ThemeSwitcher/>
            </div>
        </div>
    )


};

export default React.memo(Navbar);