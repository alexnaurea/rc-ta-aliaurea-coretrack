import { ConstantsFactory } from '@aurea/protractor-automation-helper';

export class Constants extends ConstantsFactory {
    static readonly MAX_RETRY_ATTEMPTS = 3;
    static readonly EMPTY_STRING = '';
    static readonly MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    static get separators() {
        return {
            comma: ',',
            semiColon: ';',
            apostrophe: '\'',
            pipe: '|',
            hyphen: '-',
            space: ' ',
        };
    }

    static get number() {
        return {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
            eleven: 11,
            twelve: 12,
            thirteen: 13,
            fourteen: 14,
            fifteen: 15,
            thirty: 30,
            hundred: 100,
            eightHundred: 800,
            oneFifty: 150,
        };
    }

    static get colorCode() {
        return {
            red: 'rgba(189, 32, 46, 1)',
        };
    }

    static get dateFormats() {
        return {
            M_D_YY: 'M/D/YY',
            M_D_YYYY: 'M/D/YYYY',
            H_00_A: 'h:00 A',
        };
    }

    static get dropdownIndex() {
        return {
            one: {
                index: 1,
            },
        };
    }
}
