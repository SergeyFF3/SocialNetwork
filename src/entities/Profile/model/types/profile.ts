export interface MaritalStatusType {
    not_married?: string
    dating?: string
    inSearch?: string
}

export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    city?: string
    avatar?: string
    maritalStatus?: MaritalStatusType
    hometown?: string
    comments?: string[]
}

export interface ProfileSchema {
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}