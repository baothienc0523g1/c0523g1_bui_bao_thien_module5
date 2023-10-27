export const getParsedDate = (strDate) => {
    let strSplitDate = String(strDate).split(' ');
    let date = new Date(strSplitDate[0]);

    let dd = date.getDate();
    let mm = date.getMonth() + 1;

    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
}