var complexData = [
  {'time' : '07:30 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 1},
  {'time' : '08:00 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 2},
  {'time' : '08:30 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 3},
  {'time' : '09:00 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 4},
  {'time' : '09:30 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 5},
  {'time' : '10:00 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 6},
  {'time' : '10:30 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 7},
  {'time' : '11:00 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 8},
  {'time' : '11:30 am', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 9},
  {'time' : '12:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 10},
  {'time' : '12:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 11},
  {'time' : '01:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 12},
  {'time' : '01:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 13},
  {'time' : '02:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 14},
  {'time' : '02:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 15},
  {'time' : '03:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 16},
  {'time' : '03:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 17},
  {'time' : '04:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 18},
  {'time' : '04:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 19},
  {'time' : '05:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 20},
  {'time' : '05:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 21},
  {'time' : '06:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 22},
  {'time' : '06:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 23},
  {'time' : '07:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 24},
  {'time' : '07:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 25},
  {'time' : '08:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 26},
  {'time' : '08:30 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 27},
  {'time' : '09:00 pm', 'waitTime' : Math.floor((Math.random()*60)+1), 'index': 28}
]

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
 console.log('hello world');

 // compile the template
 var source   = $("#entry-template").html();
 var template = Handlebars.compile(source);
 var parentDiv = $("#templatedProjects");


 // now iterate through the complexData list and keep appending:
 for (var i = 0; i < complexData.length; i++) {
   var curData = complexData[i];
   var curHtml = template(curData);
   parentDiv.append(curHtml);
 }
   console.log(curHtml);
});
