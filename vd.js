function displayTime(){
    var currenTime = new Date();
    var hours = currenTime.getHours();
    var minutes = currenTime.getMinutes();
    var seconds = currenTime.getSeconds();
    var meridiem = "AM";

    if(hours > 12){
        hours = hours - 12;
        meridiem = "PM"
    }

    if(minutes < 10){
        minutes = "0" + minutes;
       
    }
  
    if(seconds < 10 ){
        seconds = "0" + seconds;
        
    }

var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById("clock").innerHTML= clockTime;
}


setInterval(displayTime,1000);