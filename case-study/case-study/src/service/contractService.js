import {Contract} from "../components/contract/Contract";

export function findAll() {
    return contractList;
}

const contract1 = new Contract(1, "HD1", "2022-01-01", "2022-01-02", 250, 500);
const contract2 = new Contract(2, "HD2", "2022-01-01", "2022-01-02", 250, 1000);
const contract3 = new Contract(3, "HD3", "2022-01-01", "2022-01-02", 250, 2000);
const contract4 = new Contract(4, "HD4", "2022-01-01", "2022-01-02", 250, 2100);
const contract5 = new Contract(5, "HD5", "2022-01-01", "2022-01-02", 250, 3300);
const contract6 = new Contract(6, "HD6", "2022-01-01", "2022-01-02", 250, 3333);

const contractList = [contract1, contract2, contract3, contract4, contract5, contract6];


