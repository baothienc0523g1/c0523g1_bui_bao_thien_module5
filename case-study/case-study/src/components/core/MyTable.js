export function MyTable() {
    return (
        <>
            <h1 className="management-title">Customer List</h1>
            <table className="table table-striped mt-2" id="customer-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Example</th>
                    <th>Example</th>
                    <th>Example</th>
                    <th>Example</th>
                    <th>Example</th>
                </tr>
                </thead>
                <tbody>

                <tr key={null}>
                    <td>Example</td>
                    <td>Example</td>
                    <td>Example</td>
                    <td>Example</td>
                    <td style={{textAlign: "center"}}><i className="fas fa-edit fa-lg"></i></td>
                    <td style={{textAlign: "center"}}><a type="button" data-bs-toggle="modal"
                                                         data-bs-target="#deleteModal"><i
                        className="fas fa-trash fa-lg" style={{color: "red"}}></i></a></td>
                </tr>
                </tbody>
            </table>
        </>
    );
}