import { AbstractControl, ValidatorFn } from "@angular/forms";

//Eroare custom

export function firstLetterUpperCase(): ValidatorFn {
    return (control: AbstractControl) => {
        const value = <string>control.value; //iau valoarea field-ului
        if(!value) return; // daca nu are o valoare return
        if(value.length === 0) return; // daca lungimea e 0 return

        const firstLetter = value[0]; // daca totul e ok, iau prima litera
        if(firstLetter !== firstLetter.toUpperCase()){ //daca nu este litera mare, returnez mesajul de eroare predefinit de mine
            return {
                firstLetterUpperCase:{
                    message: 'The first letter must be uppercase'
                }
            }
        }
        return;
    }
}