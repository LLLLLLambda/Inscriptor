import {AbstractControl, ValidatorFn} from '@angular/forms';

export function prenomValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any} | null => {
    if (control.value !== '') {
      return isValidPrenom(control.value) ? null : {'formatPrenom': 'Les chiffres et les caractères spéciaux ne sont pas acceptés !'};
    }
  };
}

function isValidPrenom(strPrenom: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  return regex.test(strPrenom);
}
