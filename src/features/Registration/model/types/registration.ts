export interface GenderProps {
    male?: string
    female?: string
    notSelected?: string
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