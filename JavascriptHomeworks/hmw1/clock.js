function showTime() {
    var date = new Date();
    var h = date.getHours(); //hour
    var m = date.getMinutes(); // minute
    var s = date.getSeconds(); // second
    var day=date.getDay();
    switch(day){
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday"
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day="Sunday";
            break;
     }    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var calendar = h + ":" + m + ":" + s + " " + day;
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${calendar}`
    setTimeout(showTime, 1000); 
    }
function getName() {
    let name = prompt("What's Your Name?");  
    if(name !=" "){
        ((document.querySelector("#myName").innerHTML = name), window.onload());
     }else{
        alert("Please, Enter Your Name!");
        window.location.reload();
     }
}
showTime();
getName();