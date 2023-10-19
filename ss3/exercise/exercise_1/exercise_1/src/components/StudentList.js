'use strict';

class Student {
    constructor(id, name, age, address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let student1 = new Student(1, 'Thien', 18, 'Dong Hoi');
let student2 = new Student(2, 'Lien', 17, 'Hoa Khanh');
let student3 = new Student(3, 'Hanh', 12, 'Quang Nam');
let student4 = new Student(4, 'Hung', 19, 'Hoi An');
let student5 = new Student(5, 'Hau', 13, 'Hoa Khanh ');

let studentList = [student1, student2, student3, student4, student5];

function StudentList() {
    return (
        studentList.map((student) =>
            <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
            </tr>
        )
    )
}

export default StudentList;