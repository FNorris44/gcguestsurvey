$(document).ready(function() {
  var location = $('#location').val();
  var vacas = 1;
  var starz = 6;
  var totstars = 1;
  var totescost = parseInt(189/7);

  function topstars() {
    if (starz < 1) {
      document.getElementById('starz1').src = '/images/emptystar.jpg';
      $("#btnBack").css({ opacity: 0 });
    }
    if (starz < 2) {document.getElementById('starz2').src = '/images/emptystar.jpg';}
    if (starz < 3) {document.getElementById('starz3').src = '/images/emptystar.jpg';}
    if (starz < 4) {document.getElementById('starz4').src = '/images/emptystar.jpg';}
    if (starz < 5) {document.getElementById('starz5').src = '/images/emptystar.jpg';}
    if (starz < 6) {document.getElementById('starz6').src = '/images/emptystar.jpg';}

    if (starz < 1) {
      document.getElementById("mostars").innerHTML = "You just booked " + vacas + " vacations for only 6 stars!";
      $("#booknew").toggleClass("deadClass");
    }
  }

  var fixImages = function(destination) {
    // Set the text
    $('#vacalocation').html(destination);

    // Set the location
    $('#location').val(destination);

    // Fade out then fade in
    $('#divExpressSelection').fadeOut().next().delay(250);
    $('#reviewboxe').fadeIn();

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
      $('#reviewboxe').fadeOut().next().delay(250);
      $('#divExpressSelection').fadeIn();
      vacas += 1;
    });

    $('#reviewbook').click(function() {
      $('#reviewboxe').hide();
      $('#reviewcongrats').show();
      starz -= totstars;
      topstars();
      document.getElementById("congratsloca").innerHTML = location;
      document.getElementById("congratslocb").innerHTML = location;
      document.getElementById("congratsprice").innerHTML = totescost;
      document.getElementById("moztars").innerHTML = totstars;

      $('.pic-wrapper').fireworks({
        sound: false,
        opacity: 0.5
      });
    });

  $("#star2").click(function() {
    if ($("#star2").attr("src") == "/images/emptystar.jpg") {
      document.getElementById("star2").src = "/images/fullstar.jpg";
    }
    else document.getElementById("star2").src = "/images/emptystar.jpg";
    checkstars();
  });

  $("#star3").click(function() {
    if ($("#star3").attr("src") == "/images/emptystar.jpg") {
      if ($("#star4").attr("src") == "/images/emptystar.jpg") {
        document.getElementById("star3").src = "/images/fullstar.jpg";
      }
      else {
        document.getElementById("star4").src = "/images/emptystar.jpg";
        document.getElementById("star5").src = "/images/emptystar.jpg";
        document.getElementById("star3").src = "/images/fullstar.jpg";
      }
    }
    else {
      document.getElementById("star3").src = "/images/emptystar.jpg";
    }
    checkstars();
  });

  $("#star4, #star5").click(function() {
    if ($("#star4").attr("src") == "/images/emptystar.jpg") {
      if ($("#star3").attr("src") == "/images/emptystar.jpg") {
        document.getElementById("star4").src = "/images/fullstar.jpg";
        document.getElementById("star5").src = "/images/fullstar.jpg";
      }
      else {
        document.getElementById("star4").src = "/images/fullstar.jpg";
        document.getElementById("star5").src = "/images/fullstar.jpg";
        document.getElementById("star3").src = "/images/emptystar.jpg";
      }
    }
    else {
      document.getElementById("star4").src = "/images/emptystar.jpg";
      document.getElementById("star5").src = "/images/emptystar.jpg";
    }
    checkstars();
  });

  $("#star6").click(function() {
    if ($("#star6").attr("src") == "/images/emptystar.jpg") {
      document.getElementById("star6").src = "/images/fullstar.jpg";
    }
    else document.getElementById("star6").src = "/images/emptystar.jpg";
    checkstars();
  });

  function checkstars() {
    var creditstars = 1;
    var starplural;
    if ($("#star2").attr("src") == "/images/fullstar.jpg") {creditstars += 1;}
    if ($("#star3").attr("src") == "/images/fullstar.jpg") {creditstars += 1;}
    if ($("#star4").attr("src") == "/images/fullstar.jpg") {creditstars += 1;}
    if ($("#star5").attr("src") == "/images/fullstar.jpg") {creditstars += 1;}
    if ($("#star6").attr("src") == "/images/fullstar.jpg") {creditstars += 1;}
    if (creditstars > 1) {starplural = "Stars"} else {starplural = "Star"}

    document.getElementById("startotals").innerHTML = "$189 + " + creditstars + " " + starplural;
    totstars = creditstars;
  }
});
