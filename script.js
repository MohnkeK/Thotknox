var intrvl = setInterval(days, 500); 

function days() {
    
document.getElementById("result").innerHTML = Math.floor ((Math.random() * 100) + 1) + " Days Left"; 
    }


