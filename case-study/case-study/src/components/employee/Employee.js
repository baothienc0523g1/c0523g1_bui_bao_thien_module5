export class Employee {
    constructor(id, name, birthDay, identity,
                phoneNumber, email, level,
                position, salary) {
        this._id = id;
        this._name = name;
        this._birthDay = birthDay;
        this._identity = identity;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._level = level;
        this._position = position;
        this._salary = salary;
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

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}
