var dropdownTable = [
  {'time' : '07:00 am', 'index' : 0},
  {'time' : '07:30 am', 'index' : 1},
  {'time' : '08:00 am', 'index' : 2},
  {'time' : '08:30 am', 'index' : 3},
  {'time' : '09:00 am', 'index' : 4},
  {'time' : '09:30 am', 'index' : 5},
  {'time' : '10:00 am', 'index' : 6},
  {'time' : '10:30 am', 'index' : 7},
  {'time' : '11:00 am', 'index' : 8},
  {'time' : '11:30 am', 'index' : 9},
  {'time' : '12:00 pm', 'index' : 10},
  {'time' : '12:30 pm', 'index' : 11},
  {'time' : '01:00 pm', 'index' : 12},
  {'time' : '01:30 pm', 'index' : 13},
  {'time' : '02:00 pm', 'index' : 14},
  {'time' : '02:30 pm', 'index' : 15},
  {'time' : '03:00 pm', 'index' : 16},
  {'time' : '03:30 pm', 'index' : 17},
  {'time' : '04:00 pm', 'index' : 18},
  {'time' : '04:30 pm', 'index' : 19},
  {'time' : '05:00 pm', 'index' : 20},
  {'time' : '05:30 pm', 'index' : 21},
  {'time' : '06:00 pm', 'index' : 22},
  {'time' : '06:30 pm', 'index' : 23},
  {'time' : '07:00 pm', 'index' : 24},
  {'time' : '07:30 pm', 'index' : 25},
  {'time' : '08:00 pm', 'index' : 26},
  {'time' : '08:30 pm', 'index' : 27},
  {'time' : '09:00 pm', 'index' : 28}
]

$(document).ready(function() {
  var source3   = $("#dropdown-template").html();
  var template3 = Handlebars.compile(source3);
  var parentDiv3 = $("#myDropdown");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < dropdownTable.length; i++) {
    var curData3 = dropdownTable[i];
    var curHtml3 = template3(curData3);
    parentDiv3.append(curHtml3);
  }
});
