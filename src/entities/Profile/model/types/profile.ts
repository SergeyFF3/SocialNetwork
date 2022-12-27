export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    city?: string
    avatar?: string
    comments?: string[]
}

export interface ProfileSchema {
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}