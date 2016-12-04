$(document).ready(function() {
  if ($('#divExpressWeek').length > 0) {
    var starzee = function(init) {
      var starz = parseInt($('#starz').val(), 10);
      var tostars = parseInt($('#tostarts').val(), 10);
      var location = $('#location').val();
      var vacas = $('#vacas').val();
      var totescost = parseInt($('#totescost').val(), 10);
      var roomcount;

      if (starz < 1) {document.getElementById('starz1').src = '/images/emptystar.jpg';}
      if (starz < 2) {document.getElementById('starz2').src = '/images/emptystar.jpg';}
      if (starz < 3) {document.getElementById('starz3').src = '/images/emptystar.jpg';}
      if (starz < 4) {document.getElementById('starz4').src = '/images/emptystar.jpg';}
      if (starz < 5) {document.getElementById('starz5').src = '/images/emptystar.jpg';}
      if (starz < 6) {document.getElementById('starz6').src = '/images/emptystar.jpg';}

      switch(location) {
        case 'Ireland':
        case 'Orlando':
          roomcount = 2;
          break;
        case 'StAugustine' :
          roomcount = 3;
          break;
        default:
          roomcount = 1;
          break;
      }

      if ($("#destinationchoice").hasClass("express")) {
        document.getElementById("congratsloca").innerHTML = location;
        document.getElementById("congratslocb").innerHTML = location + " for 7 Days - " + roomcount + " BedRoom Condo";
        document.getElementById("congratsprice").innerHTML = totescost.toFixed(0);
      }

      if ($("#destinationchoice").hasClass("planning")) {
        document.getElementById("congratsloca").innerHTML = location;
        document.getElementById("congratslocb").innerHTML = location;
        document.getElementById("congratsprice").innerHTML = totescost;
        document.getElementById("moztars").innerHTML = totstars;
      }

      if (starz < 1) {
        document.getElementById("mostars").innerHTML = "You just booked " + vacas + " vacations for only 6 stars!";
        $("#booknew").toggleClass("deadClass");
      }

      $('#reviewbox').hide();
      $('#reviewcongrats').show();

      $('.pic-wrapper').fireworks({
        sound: false,
        opacity: 0.5
      });
    };

    var fixImages = function(destination) {
      // Set the text
      $('#vacalocation').html(destination);

      // Set the location
      $('#location').val(destination);

      // Fade out then fade in
      $('#divExpressSelection').fadeOut().next().delay(250);
      $('#reviewbox').fadeIn();

      // Set the pictures
      destination = destination.toLowerCase().replace(' ', '');
      for (var i=1; i<=5; i++) {
        $('#planpic' + i).attr('src', '/images/polaroid' + destination + i + '.jpg');
      }
    };

    /*************************************************\
    |                    Events                       |
    \*************************************************/
    $('.express-destination').click(function() {
      var destination = $(this).data('destination');
      fixImages(destination);
      $('#btnBack').show();
    });

    $('#btnBack').click(function () {
      $('#fireworksField').remove();
      $(this).hide();
      $('#reviewcongrats').hide();
      $('#reviewbox').fadeOut().next().delay(250);
      $('#divExpressSelection').fadeIn();
    });

    $('#reviewbook').click(function() {
      var starz = parseInt($('#starz').val(), 10);
      var tostars = parseInt($('#tostarts').val(), 10);

      starz -= totstars;
      $('#starz').val(starz);
      $('#totescost').val(189/7);
      starzee(starz);
    });

    $('#reviewexpressa').click(function() {
      var starz = parseInt($('#starz').val(), 10);
      var tostars = parseInt($('#tostarts').val(), 10);

      starz -= 1;
      $('#starz').val(starz);
      $('#totescost').val(388/7);
      starzee(starz);
    });

    $('#reviewexpressb').click(function() {
      var starz = parseInt($('#starz').val(), 10);
      var tostars = parseInt($('#tostarts').val(), 10);

      starz -= 2;
      $('#starz').val(starz);
      $('#totescost').val(189/7);
      starzee(starz);
    });
  }
});
