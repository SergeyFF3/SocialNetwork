export type { User, GenderProps, UserSchema } from './model/types/user'

export { userActions, userReducer } from './model/slices/userSlice'

export { getUserAuthData } from './model/selectors/getUserAuthData'
