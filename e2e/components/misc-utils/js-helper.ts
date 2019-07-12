import { DfElement } from './df-elements-helper';

export class JsHelper {

    private static get byRegex() {
        return new RegExp('^By\\(.+, (.+)\\)$');
    }

    static trimArray(arr: string[]) {
        for (let index = 0; index < arr.length; index++) {
            arr[index] =
                arr[index]
                    .replace(/^\s\s*/, '')
                    .replace(/\s\s*$/, '');
        }
        return arr;
    }

    static cleanArray (arr: string[]) {
        const newArray = new Array();
        for (let i = 0; i < arr.length; i++) {
          if (arr[i]) {
            newArray.push(arr[i]);
          }
        }
        return newArray;
    }

    static getLocatorValue(target: DfElement): string {
        return this.byRegex.exec(target.item.locator())[1];
    }
}
