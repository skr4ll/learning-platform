// Hilfsfunktionen

export function transformDate(date_object){
    let day = date_object.getDate(), month = date_object.getMonth() + 1, year = date_object.getFullYear();
    let hours = date_object.getHours(), minutes = date_object.getMinutes();
    let date = (day < 10 ? "0" + day : day) + "." + (month < 10 ? "0" + month : month) + "." + year;
    let time = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);
    return `${date}, ${time}`
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}