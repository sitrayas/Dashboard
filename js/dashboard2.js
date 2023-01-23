function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    if (hours < 10) {
      hours = "0" + hours;
    }
    
    var clock = document.getElementById("clock");
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  }
  
  setInterval(updateTime, 1000);

  function updateDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    
    if (day < 10) {
      day = "0" + day;
    }
    
    if (month < 10) {
      month = "0" + month;
    }
    
    var date = document.getElementById("date");
    date.innerHTML = day + "/" + month + "/" + year;
  }
  
  setInterval(updateDate, 1000);
  