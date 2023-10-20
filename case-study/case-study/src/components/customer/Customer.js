export class Customer {
    constructor(id, name, birthDay, gender,
                identity, phoneNumber, email,
                customerType, address) {
        this._id = id;
        this._name = name;
        this._birthDay = birthDay;
        this._gender = gender;
        this._identity = identity;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._customerType = customerType;
        this._address = address;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get birthDay() {
        return this._birthDay;
    }

    set birthDay(value) {
        this._birthDay = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get identity() {
        return this._identity;
    }

    set identity(value) {
        this._identity = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get customerType() {
        return this._customerType;
    }

    set customerType(value) {
        this._customerType = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}