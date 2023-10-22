export class Room {
    constructor(id, name, area, rentCost,
                maxSlot, rentType, freePresent) {
        this._id = id;
        this._name = name;
        this._area = area;
        this._rentCost = rentCost;
        this._maxSlot = maxSlot;
        this._rentType = rentType;
        this._freePresent = freePresent;
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

    get area() {
        return this._area;
    }

    set area(value) {
        this._area = value;
    }

    get rentCost() {
        return this._rentCost;
    }

    set rentCost(value) {
        this._rentCost = value;
    }

    get maxSlot() {
        return this._maxSlot;
    }

    set maxSlot(value) {
        this._maxSlot = value;
    }

    get rentType() {
        return this._rentType;
    }

    set rentType(value) {
        this._rentType = value;
    }

    get freePresent() {
        return this._freePresent;
    }

    set freePresent(value) {
        this._freePresent = value;
    }
}