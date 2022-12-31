export interface User {
    id: string
    email: string
}

// authData это пользователь, если она undefined значит пользователь не авторизован,
// если данные там храняться значит пользоватеь авторизован
export interface UserSchema {
    authData?: User
}