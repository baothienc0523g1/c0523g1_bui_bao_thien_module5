import {Customer} from "../components/customer/Customer";

export function findAll() {
    return customerList;
}

const customer1 = new Customer(1, "Sang Quoc Phan", "1998-01-01",
    "Male", 9875156248, "0902546218",
    "sang@gmail.com", "Gold", "Hue");

const customer2 = new Customer(2, "Phuc Nguyen Quy", "1999-01-01",
    "Male", 9875156248, "0902546218",
    "quy@gmail.com", "Gold", "Da Nang");

const customer3 = new Customer(3, "Long Nguyen Truong Dinh", "1999-01-01",
    "Male", 9875156248, "0902546218",
    "long@gmail.com", "Gold", "Da Nang");

const customer4 = new Customer(4, "Trung Duc Nguyen", "1970-01-01",
    "Male", 9875156248, "0902546218",
    "trung@gmail.com", "Gold", "Quang Male");

const customer5 = new Customer(5, "Tuan Hung", "1986-01-01",
    "Male", 9875156248, "0902546218",
    "hung@gmail.com", "Silver", "Ha Noi");

const customer6 = new Customer(6, "Le Quyen", "1984-01-01",
    "Female", 9875156248, "0902546218",
    "quyen@gmail.com", "Silver", "California");

const customer7 = new Customer(7, "Thu Minh", "1983-01-01",
    "Female", 9875156248, "0902546218",
    "minh@gmail.com", "Platinum", "Ha Noi");

const customer8 = new Customer(8, "Phuong Thanh", "1986-01-01",
    "Female", 9875156248, "0902546218",
    "thanh@gmail.com", "Platinum", "Tp HCM");

const customer9 = new Customer(9, "Xuan Park", "1999-01-01",
    "Male", 9875156248, "0902546218",
    "park@gmail.com", "Diamond", "Ha Noi");

const customer10 = new Customer(10, "Tu Long", "1978-01-01",
    "Male", 9875156248, "0902546218",
    "tulong@gmail.com", "Diamond", "Ha Noi");

const customerList = [customer1, customer2, customer3, customer4, customer5, customer6,
    customer7, customer8, customer9, customer10];

