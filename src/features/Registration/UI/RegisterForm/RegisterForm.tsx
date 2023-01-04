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
        registerData,
        error,
        // gender,
        isLoading
    } = useSelector(getRegisterData)

    const onChangeName = useCallback((value: string) => {
        dispatch(registerActions.setName(value))
    }, [dispatch])

    const onChangeSurname = useCallback((value: string) => {
        dispatch(registerActions.setSurname(value))
    }, [dispatch])

    const onChangeAge = useCallback((value: number) => {
        dispatch(registerActions.setAge(value))
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(registerActions.setCity(value))
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

    // const onChangeGender = useCallback((value: string) => {
    //     dispatch(registerActions.setGender(value))
    // }, [dispatch])

    const onRegister = useCallback(async () => {
        const result = await dispatch(registerUser(registerData))

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/')
        }
    }, [dispatch, registerData])

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
                        value={registerData.name}
                        onChange={onChangeName}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={1}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Фамилия'
                        value={registerData.surname}
                        onChange={onChangeSurname}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={2}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Город'
                        value={registerData.city}
                        onChange={onChangeCity}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={3}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Возраст'
                        value={registerData.age}
                        onChange={onChangeAge}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={4}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <select
                        className={cls.select}
                        tabIndex={5}
                    >
                        <option>Не выбрано</option>
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </select>
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Почта'
                        value={registerData.email}
                        onChange={onChangeEmail}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={6}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Пароль'
                        value={registerData.password}
                        onChange={onChangePassword}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={7}
                        className={cls.input}
                    />
                </div>
                <div className={cls.item}>
                    <Input
                        placeholder='Повторите пароль'
                        value={registerData.secondPassword}
                        onChange={onChangeSecondPassword}
                        theme={ThemeInput.OUTLINE}
                        tabIndex={8}
                        className={cls.input}
                    />
                </div>
                <div className={cls.btnWrapper}>
                    <Button
                        theme={ThemeButton.GREEN}
                        className={cls.btn}
                        tabIndex={8}
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