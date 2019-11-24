import { ValidatorFn, AbstractControl } from '@angular/forms';

export function nomValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any} | null => {
    if (control.value !== '') {
      return isValidNom(control.value) ? null : {'formatNom': 'Les chiffres et les caractères spéciaux ne sont pas acceptés !'};
    }
  };
}

function isValidNom(strNom: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  return regex.test(strNom);
}
