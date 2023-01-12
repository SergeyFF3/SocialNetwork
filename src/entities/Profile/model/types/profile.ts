export enum ValidateProfileError {
    INCORRECT_AGE = 'Некорректный возраст',
    INCORRECT_AGE_1 = 'Некорректный возраст 1',
    INCORRECT_FIRSTNAME = 'Заполните имя',
    INCORRECT_LASTNAME = 'Заполните фамилию',
    INCORRECT_CITY_1 = 'Заполните город',
    SERVER_ERROR = 'Ошибка загрузки данных пользователя',
    NO_DATA = 'Данных нет'
}

export enum MaritalStatusEnum {
    NOT_MARRIED = 'Не женат',
    DATING = 'Встречаюсь',
    MARRIED = 'Женат',
    ACTIVE_SEARCH = 'В активном поиске'
}

export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    city?: string
    avatar?: string
    maritalStatus?: MaritalStatusEnum
    hometown?: string
    comments?: string[]
}

export interface ProfileSchema {
    data?: Profile
    formData?: Profile
    isLoading?: boolean
    error?: string
    validateErrors?: ValidateProfileError[]
}