$(document).ready(function(){

    var centerIt = function (el /* (jQuery element) Element to center */) {
      if (!el) {
      	return;
      }
      var moveIt = function () {
          var winWidth = $(window).width();
          var winHeight = $(window).height();
          el.css("position","absolute");
          el.css("left", (((winWidth * 0.80) / 2) - (el.width() / 2)) + "px");
          el.css("top", (((winHeight * 0.80) / 2) - (el.height() / 2)) + "px");
      };
      $(window).resize(moveIt);
      moveIt();
  };

  centerIt($('.center-frame'));

var topleftit = function (el /* (jQuery element) Element to center */) {
    if (!el) {
      return;
    }
    var moveIt = function () {
        el.css("position","absolute");
        el.css("left", 0 + "px");
        el.css("top", 0 + "px");
    };
    $(window).resize(moveIt);
    moveIt();
};
    topleftit($('.homeicon'));

});
