import {Villa} from "../components/facility/villa/Villa";

export function findAll() {
    return villaList;
}

const villa1 = new Villa(1, "Villa 1", 600, 3000, 10, "days",
    "Phong tieu chuan quoc te", "Chuyen doi ta", 100, 3);

const villa2 = new Villa(2, "Villa 2", 700, 3200, 12, "days",
    "Phong tieu chuan quoc te", "Cot song em on hong?", 110, 4);

const villa3 = new Villa(3, "Villa 3", 800, 3300, 12, "days",
    "Phong tieu chuan quoc te", "Khong thay ngay ve", 110, 5);

const villa4 = new Villa(4, "Villa 4", 900, 3333, 14, "days",
    "Phong tieu chuan quoc te", "Nuoc mat em lau bang tinh yeu moi", 120, 5);

const villa5 = new Villa(5, "Villa 5", 900, 3500, 14, "days",
    "Phong tieu chuan quoc te", "Tu choi nhe nhang thui", 140, 5);

const villa6 = new Villa(6, "Villa 6", 1000, 3700, 15, "days",
    "Phong tieu chuan quoc te", "Lang tham", 200, 5);

const villaList = [villa1, villa2, villa3, villa4, villa5, villa6];