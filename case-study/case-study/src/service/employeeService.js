import {Employee} from "../components/employee/Employee";

export function findAll() {
    return employeeList;
}


const employee1 = new Employee(1, "Huynh Hung Phuoc Luong", "1994-01-01",
    4513289547, "0909190123", "tran@gmail.com",
    "College", "Manager", 7000);

const employee2 = new Employee(2, "Doan My Thi Lien", "1996-01-01",
    8456218934, "8541236548", "lien@gmail.com",
    "College", "Manager", 7100);

const employee3 = new Employee(3, "Nguyen Hanh My Thi", "1999-01-01",
    845316294, "3519468578", "hanh@gmail.com",
    "College", "Security", 7200);

const employee4 = new Employee(4, "Hau Nguyen Huu", "2000-01-01",
    5481235498, "8641259759", "hau@gmail.com",
    "College", "Security", 6900);

const employee5 = new Employee(5, "Khanh Nguyen Nhat", "1999-01-01",
    8976143267, "9456318459", "nhat@gmail.com",
    "College", "Security", 6700);

const employee6 = new Employee(6, "Le Thang Quoc", "1994-01-01",
    9876456712, "9876542184", "thang@gmail.com",
    "College", "Employee", 6790);

const employee7 = new Employee(7, "Van Hue Minh Truong", "1999-01-01",
    984325487, "6521485697", "minh@gmail.com",
    "College", "Employee", 6790);

const employeeList = [employee1, employee2, employee3,
    employee4, employee5, employee6, employee7];