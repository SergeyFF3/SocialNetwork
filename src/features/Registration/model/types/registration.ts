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
}