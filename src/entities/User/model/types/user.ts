export interface GenderProps {
    male?: string
    female?: string
    notSelected?: string
}

export interface User {
    id?: string
    email?: string
    password?: string
    secondPassword?: string
    name?: string
    surname?: string
    age?: number
    city?: string
    gender?: GenderProps
}

// authData это авторизация пользователь, если она undefined значит пользователь не авторизован,
// если данные там храняться значит пользоватеь авторизован
export interface UserSchema {
    authData?: User
}