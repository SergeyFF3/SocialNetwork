import ProfilePage from "./UI/ProfilePage";

export { ProfilePage }

export { getProfileFormData } from './model/selectors/getProfileFormData'

export { getProfileIsLoading } from './model/selectors/getProfileIsLoading'

export { getProfileError } from './model/selectors/getProfileError'

export { fetchProfileData } from './model/services/fetchProfileData'

export type { ProfileSchema } from './model/types/types'