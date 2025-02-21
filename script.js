


function clockTimer(){

    const now = new Date();
    let hours = now.getHours();
    const meridiam = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart();
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const miliseconds = now.getMilliseconds().toString().padStart(3,0);

    const timeString = `${hours}:${minutes}:${seconds}:${miliseconds} ${meridiam}`;
    document.getElementById("clock").textContent = timeString;
}

clockTimer();
setInterval(clockTimer, 100);