import {Profile} from "entities/Profile";

export interface SearchSchema {
    data?: Profile[]
    isLoading?: boolean
    error?: string
}