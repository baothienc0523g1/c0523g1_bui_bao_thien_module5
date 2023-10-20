import * as employeeService from "../../service/employeeService";

export function EmployeeList() {
    return (
        <>
            <h1 className="management-title">Employee List</h1>
            <table className="table table-striped mt-2" id="employee-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Identity</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Level</th>
                    <th>Position</th>
                    <th>Salary ($)</th>
                    <th colSpan="2">Management</th>
                </tr>
                </thead>
                <tbody>
                {
                    employeeService.findAll().map((employee, index) => {
                        return (
                            <tr key={employee.id}>
                                <td>{index + 1}</td>
                                <td>{employee._name}</td>
                                <td>{employee._birthDay}</td>
                                <td>{employee._identity}</td>
                                <td>{employee._phoneNumber}</td>
                                <td>{employee._email}</td>
                                <td>{employee._level}</td>
                                <td>{employee._position}</td>
                                <td>{employee._salary}</td>
                                <td style={{textAlign: "center"}}><i className="fas fa-edit fa-lg"></i></td>
                                <td style={{textAlign: "center"}}><a type="button" data-bs-toggle="modal"
                                                                     data-bs-target="#deleteModal"><i
                                    className="fas fa-trash fa-lg" style={{color: "red"}}></i></a></td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    );
}