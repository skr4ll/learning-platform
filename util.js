// Hilfsfunktionen

export function transformDate(date_object){
    let day = date_object.getDate(), month = date_object.getMonth() + 1, year = date_object.getFullYear();
    let date = (day < 10 ? "0" + day : day) + "." + (month < 10 ? "0" + month : month) + "." + year;
    let time = date_object.getHours() + ":" + date_object.getMinutes();
    return `${date}, ${time}`
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}