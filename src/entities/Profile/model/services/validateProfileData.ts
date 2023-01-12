import {Profile, ValidateProfileError} from "../types/profile";

export const validateProfileData = (profile?: Profile) => {

    const { age, firstname, lastname, city} = profile

    const errors: ValidateProfileError[] = []

    if (!age || age > 150 || age < 0 || age === 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }if (age === 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE_1)
    }

    if (!firstname) {
        errors.push(ValidateProfileError.INCORRECT_FIRSTNAME)
    }

    if (!lastname) {
        errors.push(ValidateProfileError.INCORRECT_LASTNAME)
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY_1)
    }

    return errors
}