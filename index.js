function clock(){
    const now = new Date();
    let hour = now.getHours();
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);
    const sec =  now.getSeconds().toString().padStart(2,0);
    //const ms = now.getMilliseconds().toString().padStart(2,0);

    const time = `${hour}:${min}:${sec}:${meridiem}`;
    

    document.getElementById("div2").textContent = time;
}

clock();
setInterval(clock,1000);