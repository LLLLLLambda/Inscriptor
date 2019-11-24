import { ValidatorFn, AbstractControl } from '@angular/forms';
import {formatDate, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');


export function ddnValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
        if (control.value) {
            const ddnMax = new Date();
            ddnMax.setFullYear(new Date().getFullYear());
            if (isnotValidDate(control.value, ddnMax)) {
              const ddnMaxString = ddnMax.toDateString();
              const ddnMaxFormatted = formatDate(ddnMaxString, 'dd-MM-yyyy', 'fr');
              return {'formatDdn': (ddnMaxFormatted)};
            }
        }
        return null;
    };
}

function isnotValidDate(ddn: Date, ddnMax: Date) {
    return ddn.getTime() > ddnMax.getTime();
}
