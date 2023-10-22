import {House} from "../components/facility/house/House";

export function findAll() {
    return houseList;
}

const house1 = new House(1, "Nha 1", 200, 2000, 8, "days",
    "Phong tieu chuan kep", "Giuong doi", 2);

const house2 = new House(2, "Nha 2", 250, 2100, 8, "days",
    "Phong tieu chuan binh thuong", "Giuong doi", 4);

const house3 = new House(3, "Nha 3", 300, 2200, 9, "days",
    "Phong khong co tieu chuan", "Giuong doi", 4);

const house4 = new House(4, "Nha 4", 400, 2400, 10, "months",
    "Phong nhieu tieu chuan", "Giuong doi", 3);

const house5 = new House(5, "Nha 5", 500, 2500, 12, "years",
    "Phong chay chua chay", "Giuong doi", 5);

const house6 = new House(6, "Nha 6", 700, 3000, 15, "days",
    "Phong benh hon chua benh", "Giuong doi", 5);

const houseList = [house1, house2, house3, house4, house5, house6];