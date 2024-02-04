//maps each month, index 0 corresponding to january and 11 to december, to how many days that month contains
const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
const monthToString = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayToString = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function monthBuilder(month){
    const days = document.getElementById("days");
    const date = new Date();
        date.setMonth(month);
    const firstDayOfMonth = date.getDay();

    for(let i=1; i<daysInMonth[month]; i++){
        date.setDate(i);
        const dayOfWeek = date.getDay();
        days.innerHTML += `
            <li style="grid-column-start:${1+dayOfWeek};grid-row-start:${Math.floor((firstDayOfMonth + i) / 7)}">
            ${dayToString[dayOfWeek]}${i}
            </li>`;
    }
    
}

window.onload = () => monthBuilder(1);