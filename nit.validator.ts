import {FormControl} from '@angular/forms';

export function NitValidator(control: FormControl) {

    let nit = control.value;
    let response: any;
    if (typeof nit !== 'undefined' && nit !== null) {
        console.log(nit);
        nit = nit.toLowerCase();
        if (nit === 'cf' || nit === 'c/f' || nit === 'c.f.') {
            response = null;
        } else if (nit.length > 4) {
            let digits: string;
            let correlative: string;
            let sum = 0;

            if (nit.indexOf('-') !== -1) {
                digits = nit.substring(0, nit.length - 2);
                correlative = nit.substring(nit.length - 1);
            } else {
                digits = nit.substring(0, nit.length - 1);
                correlative = nit.substring(nit.length - 1);
            }
            let factor = digits.length + 1;
            try {
                for (let i = 0; i < digits.length; i++) {
                    sum += Number((digits.substring(i, i + 1))) * factor;
                    factor--;
                }
            } catch (ex) {
                response = {validNit: true};
            }
            let xMod11: number;
            xMod11 = (11 - (sum % 11)) % 11;
            if (xMod11 === 10 && correlative === 'k' || correlative.endsWith(xMod11.toString())) {
                response = null;
            } else {
                response = {validNit: true};
            }
        } else {
            response = {validNit: true};
        }
    } else {
        response = null;
    }
    return response;
}


