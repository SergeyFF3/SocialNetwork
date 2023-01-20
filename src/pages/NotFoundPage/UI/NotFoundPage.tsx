import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './NotFoundPage.module.scss'
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import Button, {ThemeButton} from "shared/UI/Button/Button";
import {useNavigate, useParams} from 'react-router-dom';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {

    const {
        className
    } = props

    const {id} = useParams<{ id: string }>()

    const navigate = useNavigate()

    const isAuth = useSelector(getUserAuthData)

    const onProfile = React.useCallback(() => {
        navigate(`/profile/${id}`)
    }, [navigate, id])

    const onAuth = React.useCallback(() => {
        navigate('/')
    }, [navigate])

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1 className={cls.title}>Страница не найдена</h1>
            {isAuth ? <Button
                    theme={ThemeButton.NORMAL}
                    onClick={onProfile}
                >На главную
                </Button>
                : <Button
                    theme={ThemeButton.NORMAL}
                    onClick={onAuth}
                >На главную
                </Button>}
        </div>
    );
};

export default React.memo(NotFoundPage);