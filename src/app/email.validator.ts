import { ValidatorFn, AbstractControl } from '@angular/forms';

export function emailValidator(strMail: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
        return isValidEmail(strMail) ? null : {"formatEmail": "exemple@exemple.ex"}
    }
}

function isValidEmail(strMail: string) {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(strMail)
}