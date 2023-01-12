import ProfileCard from "./UI/ProfileCard";

export { ProfileCard }

export { fetchProfileData } from './model/services/fetchProfileData'

export { updateProfileData } from './model/services/updateProfileData'

export type {
    Profile,
    ProfileSchema,
    ValidateProfileError,
    MaritalStatusEnum
} from './model/types/profile'

export {
    getProfileIsLoading,
    getProfileError,
    getProfileData,
    getProfileFormData,
    getProfileValidateError
} from './model/selectors/getProfileData'