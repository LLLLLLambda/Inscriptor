import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ddnValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
        if(control.value) {
            const ddnMax = new Date()
            ddnMax.setFullYear(new Date().getFullYear() - 3)
            const ddnMin = new Date()
            ddnMin.setFullYear(new Date().getFullYear() - 5)
            if(isnotValidDate(control.value, ddnMin, ddnMax)) {
                return {'formatDdn': (ddnMin + " au " + ddnMax)}
            }
        }
        return null;
    }
}

function isnotValidDate(ddn: Date, ddnMin: Date, ddnMax: Date) {
    return ddn.getTime() < ddnMin.getTime() || ddn.getTime() > ddnMax.getTime()
}