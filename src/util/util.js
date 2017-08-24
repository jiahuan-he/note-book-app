// As item id
export const currentDateToString= ()=> {
    let date = new Date();
    return (''
    + date.getFullYear().toString()
    + date.getMonth().toString()
    + date.getDate().toString()
    + date.getHours().toString()
    + date.getSeconds().toString()
    + date.getMilliseconds().toString())
}

