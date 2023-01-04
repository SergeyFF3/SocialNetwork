export interface MaritalStatusType {
    not_married?: string
    dating?: string
    inSearch?: string
}

export enum MaritalStatusEnum {
    NOT_MARRIED = 'Не женат',
    DATING = 'Встречаюсь',
    inSearch = 'В активном поиске'
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
    isLoading?: boolean
    error?: string
    readonly?: boolean
}