import {monthNames} from './constants'
export const currentDateToString= ()=> {
    let date = new Date();
    return (''
    + date.getFullYear().toString()
    + date.getMonth().toString()
    + date.getDate().toString()
    + date.getHours().toString()
    + date.getSeconds().toString()
    + date.getMilliseconds().toString())
};

// export const formatDate = (date) => {
//     return date.getDate()+'-'+ monthNames[date.getMonth()] +'-'+date.getFullYear();
// };

// temp
export const formatDate = (date) => {
    return date;
};

