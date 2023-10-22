export class House {
    constructor(id, name, area, rentCost,
                maxSlot, rentType, roomType,
                description, floors) {
        this._id = id;
        this._name = name;
        this._area = area;
        this._rentCost = rentCost;
        this._maxSlot = maxSlot;
        this._rentType = rentType;
        this._roomType = roomType;
        this._description = description;
        this._floors = floors;
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

    get roomType() {
        return this._roomType;
    }

    set roomType(value) {
        this._roomType = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get floors() {
        return this._floors;
    }

    set floors(value) {
        this._floors = value;
    }
}