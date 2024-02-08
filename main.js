//maps each month, index 0 corresponding to january and 11 to december, to how many days that month contains
const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
const monthToString = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayToString = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const busyDates = new Set();

class SimpleDate{
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    static createFromString(str){
        const day = str.slice(0, 2);
        const month = str.slice(2, 4);
        const year = str.slice(4);
        return new SimpleDate(day, month, year)
    }
    toString(){
        const day = this.day.toString().length < 2 ? "0" + this.day : this.day;
        const month = this.month.toString().length < 2 ? "0" + this.month : this.month;
        return `${day}${month}${this.year}`;
   }
}

function createMonthElement(month){
    const dayContainer = document.getElementById("days");
    const complexDate = new Date();
        complexDate.setMonth(month);
    const firstDayOfMonth = complexDate.getDay();
    const year = complexDate.getFullYear();
    for(let i=1; i<=daysInMonth[month]; i++){
        complexDate.setDate(i);
        const dayOfWeek = complexDate.getDay();
        const simpleDate = new SimpleDate(i, month, year);
        const id = simpleDate.toString();
        const dayElement = document.createElement("li");
            dayElement.style = `
                grid-column-start:${1+dayOfWeek};
                grid-column-end:${1+dayOfWeek};
                grid-row-start:${Math.floor((firstDayOfMonth + i) / 7) + 1};
                grid-row-end:${Math.floor((firstDayOfMonth + i) / 7) + 1}`;
            dayElement.id = id;
            dayElement.innerHTML = i;
            dayElement.addEventListener("click", () => onDayClick(dayElement));
        dayContainer.appendChild(dayElement);
    }
}

function onDayClick(day){
    if(day.hasAttribute("clicked")){
        day.removeAttribute("clicked");
        busyDates.delete(day.id)
    }else{
        day.setAttribute("clicked", "true");
        busyDates.add(day.id);
    }
    console.log(busyDates);
}

window.onload = () => createMonthElement(1);