import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './LoginForm.module.scss'
import Input, {ThemeInput} from "shared/UI/Input/Input";
import Button, {ThemeButton} from "shared/UI/Button/Button";
import {useAppDispatch} from "app/provider/storeProvider/store";
import {loginActions} from '../../model/slices/loginSlice';
import {useSelector} from "react-redux";
import {getLoginEmail, getLoginError, getLoginIsLoading, getLoginPassword} from "../../model/selectors/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername";
import Text, {SizeText, ThemeText} from "shared/UI/Text/Text";
import {useNavigate, useParams} from 'react-router-dom';
import {RoutePath} from "shared/config/routeConfig/routeConfig";


interface LoginFormProps {
    className?: string
}

const LoginForm = (props: LoginFormProps) => {

    const {className} = props

    const {id} = useParams<{id: string}>()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const email = useSelector(getLoginEmail)

    const password = useSelector(getLoginPassword)

    const isLoading = useSelector(getLoginIsLoading)

    const error = useSelector(getLoginError)

    // Для всех функций которые мы куда-то передаем пропсом нужно использовать useCallback, чтобы ссылка никогда не менялась
    const onChangeEmail = React.useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = React.useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = React.useCallback(async () => {
        const result = await dispatch(loginByUsername({password, email}))

        if (result.meta.requestStatus === 'fulfilled') {

            navigate(`${RoutePath.profile}${id}`)
        }
    }, [dispatch, password, email, navigate, id])

    const onRegistration = React.useCallback(() => {
        navigate('/register')
    }, [navigate])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={cls.logoWrapper}>
                <div className={cls.logo}>
                    <span className={cls.span}>N</span>
                </div>
            </div>
            <Text
                size={SizeText.L}
                className={cls.title}
                title='Вход в Netty'
            />
            {error && <Text
              size={SizeText.M}
              theme={ThemeText.ERROR}
              text={error}
            />}
            <form>
                <Input
                    type='text'
                    name='email'
                    className={cls.input}
                    theme={ThemeInput.OUTLINE}
                    placeholder="Введите почту"
                    onChange={onChangeEmail}
                    value={email}
                />
                <Input
                    type='password'
                    className={cls.input}
                    theme={ThemeInput.OUTLINE}
                    placeholder="Введите пароль"
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    onClick={onLogin}
                    disabled={isLoading}
                    theme={ThemeButton.NORMAL}
                    className={cls.btn}
                >
                    Войти
                </Button>
                <Text
                    size={SizeText.M}
                    text='или'
                    className={cls.or}
                />
                <Button
                    className={cls.greenBtn}
                    onClick={onRegistration}
                    theme={ThemeButton.GREEN}
                >
                    Зарегистрироваться
                </Button>
                <Text
                    className={cls.textBottom}
                    size={SizeText.S}
                    text='После регистрации вы получите доступ ко всем возможностям Netty'
                />
            </form>
        </div>
    );
};

export default React.memo(LoginForm);