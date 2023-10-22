export class Contract {
    constructor(id, code, startDay, endDay, deposit, totalPay) {
        this._id = id;
        this._code = code;
        this._startDay = startDay;
        this._endDay = endDay;
        this._deposit = deposit;
        this._totalPay = totalPay;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get startDay() {
        return this._startDay;
    }

    set startDay(value) {
        this._startDay = value;
    }

    get endDay() {
        return this._endDay;
    }

    set endDay(value) {
        this._endDay = value;
    }

    get deposit() {
        return this._deposit;
    }

    set deposit(value) {
        this._deposit = value;
    }

    get totalPay() {
        return this._totalPay;
    }

    set totalPay(value) {
        this._totalPay = value;
    }
}