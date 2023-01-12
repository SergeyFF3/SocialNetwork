import {RegistrationSchema, ValidateRegisterError} from "../types/registration";

export const validateRegisterData = (register?: RegistrationSchema) => {

    const { password, secondPassword, name, surname, email } = register

    const errors: ValidateRegisterError[] = []

    if (!name || !surname || !email || !password) {
        errors.push(ValidateRegisterError.INCORRECT_REG_DATA)
    }

    if (password.length < 5) {
        errors.push(ValidateRegisterError.INCORRECT_PASS)
    }

    if (password !== secondPassword) {
        errors.push(ValidateRegisterError.INCORRECT_PASSWORDS)
    }

    return errors
}