document.addEventListener("DOMContentLoaded", function() {

    const hours = new Date().getHours() // get the current hour
    
    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?
    
    let message = "";
    
                if (isMorning) {
                    message = "Good morning! Have a great start to your day!";
                } else if (isAfternoon) {
                    message = "Good afternoon! Keep pushing forward!";
                } else if (isEvening) {
                    message = "Good evening! Time to relax and get in bed.";
                }
                document.getElementById("welcome").innerText = message;
            });