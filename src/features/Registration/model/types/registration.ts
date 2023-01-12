export enum ValidateRegisterError {
    INCORRECT_REG_DATA = 'Все поля должны быть заполнены',
    INCORRECT_PASS = 'Пароль не менее 5 символов',
    INCORRECT_PASSWORDS = 'Пароли не совпадают',
    SERVER_ERROR = 'Серверная ошибка'
}

export enum GenderProps {
    notSelected = 'Не выбрано',
    male = 'Мужчина',
    female = 'Женщина'
}

export interface RegistrationSchema {
    email: string
    password: string
    secondPassword: string
    name: string
    surname: string
    isLoading?: boolean
    error?: string
    gender?: GenderProps
    validateErrors?: ValidateRegisterError[]
}