export const INPUT = 'INPUT'

export const Inputs: Record<string, RegExp> = {
    email: new RegExp(`^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@.+(\..{1,11})?)$`),
    password: new RegExp(`((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})`),
    first_name: new RegExp(`^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$`),
    second_name: new RegExp(`^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$`),
    login: new RegExp(`^[a-zA-Z0-9/_-]{3,20}$`),
    phone: new RegExp(`^[+0-9]{1}[0-9]{10,15}$`),
    message: new RegExp(`\\w`),
}
