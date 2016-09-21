var $visibleElements = $(":visible");

var random255 = function () {
  return Math.floor(Math.random()*255);
}
var randomColor = function () {
  return "rgb(" + random255() + "," + random255() + "," + random255() + ")";
}

var doWork = function () {
  console.log("stuff!")
  $visibleElements.each(function () {
    $(this).css("backgroundColor",randomColor());
  });	
}

// //UI-blocking version, page will stop responding
// for(var i=0; i<=10000; i++) {
//     doWork();
// }

//Non-UI-blocking version
var i=0;
var intervalId = setInterval(function () {
  if (i > 10000) {
    clearInterval(intervalId);
  }
  doWork();
  i++;
},1);
