export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    city?: string
    avatar?: string
    // maritalStatus?: MaritalStatusEnum
    hometown?: string
    comments?: string[]
}

export interface ProfileSchema {
    data?: Profile
    formData?: Profile
    isLoading?: boolean
    error?: string
}