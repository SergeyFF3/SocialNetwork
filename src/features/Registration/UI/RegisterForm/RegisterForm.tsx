import React, {useCallback} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './RegisterForm.module.scss'
import Text, {SizeText, ThemeText} from "shared/UI/Text/Text";
import Input, {ThemeInput} from "shared/UI/Input/Input";
import Button, {SizeButton, ThemeButton} from "shared/UI/Button/Button";
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import {getRegisterData} from "../../model/selectors/getRegisterData";
import {registerActions} from 'features/Registration/model/slices/registerSlice';
import {registerUser} from "../../model/services/registerUser";
import {useNavigate} from 'react-router-dom';

interface RegisterFormProps {
    className?: string
}

const RegisterForm = (props: RegisterFormProps) => {

    const {
        className
    } = props

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const {
        surname,
        name,
        email,
        password,
        secondPassword,
        error,
        gender,
        isLoading
    } = useSelector(getRegisterData)

    const onChangeName = useCallback((value: string) => {
        dispatch(registerActions.setName(value))
    }, [dispatch])

    const onChangeSurname = useCallback((value: string) => {
        dispatch(registerActions.setSurname(value))
    }, [dispatch])

    const onChangeEmail = useCallback((value: string) => {
        dispatch(registerActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(registerActions.setPassword(value))
    }, [dispatch])

    const onChangeSecondPassword = useCallback((value: string) => {
        dispatch(registerActions.setSecondPassword(value))
    }, [dispatch])

    const onChangeGender = useCallback((value: string) => {
        dispatch(registerActions.setGender(value))
    }, [dispatch])

    const onRegister = useCallback(async () => {
        const result = await dispatch(registerUser({email, password, secondPassword, surname, name}))

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/')
        }
    }, [dispatch, email, password, secondPassword, surname, name])

    const navigateLogin = useCallback( () => {
        navigate('/')
    }, [navigate])

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <div className={cls.logoWrapper}>
                <div className={cls.textLeft}>
                    <Text
                        size={SizeText.L}
                        title='Регистрация'
                    />
                </div>
                <div className={cls.textRight}>
                    <Text
                        size={SizeText.L}
                        title='Netty'
                    />
                    <div className={cls.logo}>
                        <span className={cls.span}>N</span>
                    </div>
                </div>
            </div>
            {error && <Text
              className={cls.error}
              theme={ThemeText.ERROR}
              text={error}
            />}
            <form className={cls.registerGrid}>
                <div className={cls.item}>
                    <Input
                        placeholder='Имя'
                        value={name}
                        onChange={onChangeName}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={1}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Пароль'
                        value={password}
                        onChange={onChangePassword}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={4}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Фамилия'
                        value={surname}
                        onChange={onChangeSurname}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={2}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Повторите пароль'
                        value={secondPassword}
                        onChange={onChangeSecondPassword}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={5}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Почта'
                        value={email}
                        onChange={onChangeEmail}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={3}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <select
                        className={cls.select}
                        tabIndex={6}
                    >
                        <option>Не выбрано</option>
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </select>
                </div>
                <div className={cls.btnWrapper}>
                    <Button
                        theme={ThemeButton.GREEN}
                        className={cls.btn}
                        tabIndex={7}
                        onClick={onRegister}
                    >
                        Зарегистрироваться
                    </Button>
                    <Button
                        onClick={navigateLogin}
                        size={SizeButton.S}
                        theme={ThemeButton.CLEAR}
                    >
                        Уже есть аккаунт?
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default React.memo(RegisterForm);