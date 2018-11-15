  // This serves as a fake database:
  // var BKtime = setInterval(){function(){Math.floor((Math.random()*60)+1);
  // },500};
  var time1 = Math.floor((Math.random()*60)+1);
  var time2 = Math.floor((Math.random()*60)+1);
  var time3 = Math.floor((Math.random()*60)+1);
  var time4 = Math.floor((Math.random()*60)+1);
  var time5 = Math.floor((Math.random()*60)+1);
  var time6 = Math.floor((Math.random()*60)+1);
  var time7 = Math.floor((Math.random()*60)+1);
  var time8 = Math.floor((Math.random()*60)+1);
  var time9 = Math.floor((Math.random()*60)+1);


 var complexData = [
  {'title': 'Burger King', 'waitTime' : time1,'index': 1, 'ranking' : 0},
  {'title': 'Tapioca', 'waitTime' : time2 , 'index': 2, 'ranking' : 0},
  {'title': 'LemonGrass', 'waitTime' : time3, 'index': 3, 'ranking' : 0},
  {'title': 'Subway', 'waitTime' : time4, 'index': 4, 'ranking' : 0},
  {'title': 'Shogun', 'waitTime' : time5, 'index': 5, 'ranking' : 0},
  {'title': 'Rubios', 'waitTime' : time6, 'index': 6, 'ranking' : 0},
  {'title': 'Santorini', 'waitTime' : time7, 'index': 7, 'ranking' : 0},
  {'title': 'Seed&Sprouts', 'waitTime' : time8, 'index': 8, 'ranking' : 0},
  {'title': 'PandaExpress', 'waitTime' : time9, 'index': 9, 'ranking' : 0},
]

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedProjects");
  var parentDiv2 = $("#FavoritesList");

  complexData.sort(function(a, b) {
  return parseFloat(a.waitTime) - parseFloat(b.waitTime);
  });
  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < complexData.length; i++) {
    var curData2 = JSON.parse(localStorage.getItem(complexData[i].title));
    if(curData2){
      var curHtml2 = template(curData2);
      parentDiv2.append(curHtml2);
    }
  }

  for (var i = 0; i < complexData.length; i++) {
      complexData[i].ranking = i+1;
      var curData = complexData[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
});
