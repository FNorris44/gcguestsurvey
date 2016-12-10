$(document).ready(function(){
    var centerIt = function (el /* (jQuery element) Element to center */) {
      if (!el) {
      	return;
      }
      var moveIt = function () {
          var winWidth = $(window).width();
          var winHeight = ($(window).width())*(0.65);
          el.css("position","absolute");
          el.css("left", (((winWidth * 0.80) / 2) - (el.width() / 2)) + "px");
          el.css("top", (((winHeight * 0.70) / 2) - (el.height() / 2)) + "px");
      };
      $(window).resize(moveIt);
      moveIt();
  };

  var topleftit = function (el /* (jQuery element) Element to center */) {
      if (!el) {
        return;
      }
      var moveIt = function () {
          el.css("position","absolute");
          el.css("left", .6 + "vw");
          el.css("top", .6 + "vw");
      };
      $(window).resize(moveIt);
      moveIt();
  };

  centerIt($('.center-frame'));
  topleftit($('.homeicon'));

  // Force the zoom to 100%
  var scale = 'scale(1)';
  document.body.style.webkitTransform =  scale;
  document.body.style.transform = scale;
});
