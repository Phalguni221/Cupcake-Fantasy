let currentTime = new Date();
// let cDay = currentDate.getDate()
// let cMonth = currentDate.getMonth() + 1
// let cYear = currentDate.getFullYear()
// console.log(cDay);
// console.log(cMonth);
// console.log(cYear);

// mytime = setTimeout(expression, msec);
// // Set the Time we're counting down to
// var countDownDate = new Date( "Dec 30 2021 00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
 
//   var minutes = Math.floor((distance % (1000 * 120)) / 1000);
//   var seconds = Math.floor((distance % (1000 * 120)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("timer").innerHTML = seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance = 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "Time's Up!";
//   };

//   })
  console.clear()
  let timer = document.querySelector('h1')
  let startingTime = 120
  let startTimer;
  let startStopTimer = () => {
    if(startTimer){
      clearInterval(startTimer);
      timer.innerHTML = '02:00'
      startingTime = 120
      return startTimer = undefined
    }else{
      return startTimer = setInterval(()=>{
        timer.innerHTML = `00:0${startingTime--}`
      }, 1000)
    }
  }