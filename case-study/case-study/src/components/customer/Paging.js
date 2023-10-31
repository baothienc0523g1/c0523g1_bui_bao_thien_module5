function PageList(page){
    const {currentPage,totalItem,onPageChange,sizePage } = page;
    const totalPages = Math.ceil(totalItem/sizePage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
            <button
                key={i}
                onClick={() => onPageChange(i)}
                className={currentPage === i ?"btn btn-primary":"btn btn-outline-secondary"}
            > {i} </button>
        );
    }
    return(
        <div>
            <nav style={{marginLeft: "19%", marginTop: "20px"}} >
                <ul className="pagination" style={{marginLeft: "37%"}}>
                    {pageNumbers.map(page =>(
                        <li className="page-item">{page}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default PageList;