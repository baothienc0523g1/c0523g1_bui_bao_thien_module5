import * as contractService from "../../service/contractService";

function ContractList() {
    return (
        <>
            <h1 className="management-title">House List</h1>
            <table className="table table-striped mt-2" id="customer-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Contract No.</th>
                    <th>Start day</th>
                    <th>End day</th>
                    <th>Deposit</th>
                    <th>Total pay</th>
                </tr>
                </thead>
                <tbody>
                {
                    contractService.findAll().map((contract, index) => {
                        return (
                            <tr key={contract._id}>
                                <td>{index + 1}</td>
                                <td>{contract._code}</td>
                                <td>{contract._startDay}</td>
                                <td>{contract._endDay}</td>
                                <td>{contract._deposit}</td>
                                <td>{contract._totalPay}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>

    );
}