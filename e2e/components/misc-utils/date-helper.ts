import * as moment from 'moment';

export class DateHelper {

    static async getFutureDateInSequenceMMDDYY(days: number, splitter = '/', useZero: boolean = true) {
        const currentDate = new Date();
        await currentDate.setDate(currentDate.getDate() + days);
        let dateAltered: any = currentDate.getDate();
        let month: any = currentDate.getMonth() + 1; // January is 0!

        if (useZero) {
            if (dateAltered < 10) {
                dateAltered = `0${dateAltered}`;
            }
            if (month < 10) {
                month = `0${month}`;
            }
        }

        const year = currentDate.getFullYear();
        return `${month}${splitter}${dateAltered}${splitter}${year}`;
    }

    static async getPastDate(days: number, splitter = '/') {
        const currentDate = new Date();
        await currentDate.setDate(currentDate.getDate() - days);
        let dateAltered: any = currentDate.getDate();
        let month: any = currentDate.getMonth() + 1; // January is 0!

        if (dateAltered < 10) {
            dateAltered = `0${dateAltered}`;
        }
        if (month < 10) {
            month = '0' + month;
        }

        const year = currentDate.getFullYear();
        return `${dateAltered}${splitter}${month}${splitter}${year}`;
    }

    static async getPastDateAsMMddYYYY(days: number, splitter = '/', useZero: boolean = true) {
        const currentDate = new Date();
        await currentDate.setDate(currentDate.getDate() - days);
        let dateAltered: any = currentDate.getDate();
        let month: any = currentDate.getMonth() + 1; // January is 0!

        if (useZero) {
            if (dateAltered < 10) {
                dateAltered = `0${dateAltered}`;
            }
            if (month < 10) {
                month = `0${month}`;
            }
        }

        const year = currentDate.getFullYear();
        return `${month}${splitter}${dateAltered}${splitter}${year}`;
    }

    static async getTodayDate(splitter = '/') {
        const todayDate = new Date();
        const year = todayDate.getFullYear().toString();
        const month = (todayDate.getMonth() + 1).toString(); // January is 0!
        const day = todayDate.getDate().toString();
        return `${year}${splitter}${month}${splitter}${day}`;
    }

    static getCurrentDate(): moment.Moment {
        return moment(new Date()).utcOffset(0);
    }

    static getFutureDate(days = 1, utcOffset = 0): moment.Moment {
        return moment(new Date()).add(days, 'days').utcOffset(utcOffset);
    }
}
