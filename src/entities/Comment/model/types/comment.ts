import {User} from "entities/User";

export interface Comment {
    id?: string
    user?: User
    text?: string
}

export interface CommentSchema {
    data?: Comment[]
    isLoading?: boolean
    error?: string
}