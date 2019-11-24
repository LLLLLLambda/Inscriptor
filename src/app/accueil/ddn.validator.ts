import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ddnValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
        return (control) => {
            const ddnMax = new Date()
            ddnMax.setFullYear(control.value.getFullYear() - 5)
            const ddnMin = new Date()
            ddnMin.setFullYear(control.value.getFullYear() - 3)
            if(isnotValidDate(control.value, ddnMin, ddnMax)) {
                return {'formatDdn': (ddnMin + " au " + ddnMax)}
            }
            return null;
        }
    }
}

function isnotValidDate(ddn: Date, ddnMin: Date, ddnMax: Date) {
    return ddn.getDate() < ddnMin.getDate() || ddn.getDate() > ddnMax.getDate()
}