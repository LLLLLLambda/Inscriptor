import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ddnValidator(ddn: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
        return (ddn) => {
            const ddnMax = new Date()
            ddnMax.setFullYear(ddn.getFullYear() - 5)
            const ddnMin = new Date()
            ddnMin.setFullYear(ddn.getFullYear() - 3)
            if(isnotValidDate(ddn, ddnMin, ddnMax)) {
                return {'formatDdn': ddnMin + " au " + ddnMax}
            }
            return null;
        }
    }
}

function isnotValidDate(ddn: Date, ddnMin: Date, ddnMax: Date) {
    return ddn.getDate() < ddnMin.getDate() || ddn.getDate() > ddnMax.getDate()
}