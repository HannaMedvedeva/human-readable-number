module.exports = function toReadable(number) {
    let result = '';
    if(number === 0){
        return 'zero';
    }
    if (Math.floor((number / 10) % 10) === 1) {
        result = switchHundreds(number) +
            switchDecades(number);

    } else {
        result = switchHundreds(number) +
            switchDecades(number) +
            switchDigits(number);
    }
    return result.trim();


    function switchHundreds(number) {
        let hundredsStr = '';
        let hundreds = Math.floor(number / 100);
        if (hundreds > 0) {
            switch (hundreds) {
                case 1:
                    hundredsStr = 'one hundred ';
                    break;
                case 2:
                    hundredsStr = 'two hundred ';
                    break;
                case 3:
                    hundredsStr = 'three hundred ';
                    break;
                case 4:
                    hundredsStr = 'four hundred ';
                    break;
                case 5:
                    hundredsStr = 'five hundred ';
                    break;
                case 6:
                    hundredsStr = 'six hundred ';
                    break;
                case 7:
                    hundredsStr = 'seven hundred ';
                    break;
                case 8:
                    hundredsStr = 'eight hundred ';
                    break;
                case 9:
                    hundredsStr = 'nine hundred ';
                    break;
            }
        }
        return hundredsStr;
    }

    function switchDecades(number) {
        let decadesStr = '';
        let digits = number % 10;
        let decades = Math.floor((number / 10) % 10);
        if (decades > 0) {
            switch (decades) {
                case 1: {
                    switch (digits) {
                        case 0:
                            decadesStr = 'ten ';
                            break;
                        case 1:
                            decadesStr = 'eleven ';
                            break;
                        case 2:
                            decadesStr = 'twelve ';
                            break;
                        case 3:
                            decadesStr = 'thirteen ';
                            break;
                        case 4:
                            decadesStr = 'fourteen ';
                            break;
                        case 5:
                            decadesStr = 'fifteen ';
                            break;
                        case 6:
                            decadesStr = 'sixteen ';
                            break;
                        case 7:
                            decadesStr = 'seventeen ';
                            break;
                        case 8:
                            decadesStr = 'eighteen ';
                            break;
                        case 9:
                            decadesStr = 'nineteen ';
                            break;
                    }
                    break;
                }

                case 2:
                    decadesStr = 'twenty ';
                    break;
                case 3:
                    decadesStr = 'thirty ';
                    break;
                case 4:
                    decadesStr = 'forty ';
                    break;
                case 5:
                    decadesStr = 'fifty ';
                    break;
                case 6:
                    decadesStr = 'sixty ';
                    break;
                case 7:
                    decadesStr = 'seventy ';
                    break;
                case 8:
                    decadesStr = 'eighty ';
                    break;
                case 9:
                    decadesStr = 'ninety ';
                    break;
            }
        }
        return decadesStr;
    }

    function switchDigits(number) {
        let digits = number % 10;
        let digitsStr = '';
        if (digits > 0) {

            switch (digits) {
                case 1:
                    digitsStr = 'one ';
                    break;
                case 2:
                    digitsStr = 'two ';
                    break;
                case 3:
                    digitsStr = 'three ';
                    break;
                case 4:
                    digitsStr = 'four ';
                    break;
                case 5:
                    digitsStr = 'five ';
                    break;
                case 6:
                    digitsStr = 'six ';
                    break;
                case 7:
                    digitsStr = 'seven ';
                    break;
                case 8:
                    digitsStr = 'eight ';
                    break;
                case 9:
                    digitsStr = 'nine ';
                    break;

            }
        }
        return digitsStr;
    }
}
