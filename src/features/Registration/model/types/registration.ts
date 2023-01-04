import {User} from "entities/User";

export interface RegistrationSchema {
    registerData: User
    isLoading?: boolean
    error?: string
}