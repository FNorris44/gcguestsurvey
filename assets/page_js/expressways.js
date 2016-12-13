$(document).ready(function() {
  var vacas = 0;
  if ($('#divExpressWeek').length > 0) {
    var starzee = function(init) {
      var starz = parseInt($('#starz').val(), 10);
      var tostars = parseInt($('#tostarts').val(), 10);
      var location = $('#location').val();

      var totescost = parseInt($('#totescost').val(), 10);
      var roomcount;

      if (starz < 1) {
        document.getElementById('starz1').src = '/images/emptystar.jpg';
        $("#btnBack").css({ opacity: 0 });
      }
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
        document.getElementById("congratslocb").innerHTML = location;
        document.getElementById("congratsprice").innerHTML = totescost.toFixed(0);
      }

      if (starz < 1) {
        document.getElementById("mostars").innerHTML = "You just booked " + vacas + " vacations for only 6 stars!";
        $("#booknew").toggleClass("deadClass");
      }

      $('#reviewboxe').hide();
      $('#reviewcongrats').show();

      $('.pic-wrapper').fireworks({
        sound: false,
        opacity: 0.5
      });
    };

    /////////////////////////
    /////--Date Stuff--//////
    /////////////////////////
  //   var today = new Date(), sixd = new Date(), sevend = new Date(),
  //       thirteend = new Date(), fourteend = new Date(), twentyd = new Date(),
  //       twentyeightd = new Date(), thirtyfod = new Date(), fofid = new Date(),
  //       fioned = new Date();
  //
  //   sixd.setDate(today.getDate()+6);
  //   sevend.setDate(today.getDate()+7);
  //   thirteend.setDate(today.getDate()+13);
  //   fourteend.setDate(today.getDate()+14);
  //   twentyd.setDate(today.getDate()+20);
  //   twentyeightd.setDate(today.getDate()+28);
  //   thirtyfod.setDate(today.getDate()+34);
  //   fofid.setDate(today.getDate()+45);
  //   fioned.setDate(today.getDate()+51);
  //
  //   document.getElementById('date1').innerHTML = (formatdate(today) + ' - ' + formatdate(sixd)).replace(/,/g, '');
  //   document.getElementById('date2').innerHTML = (formatdate(today) + ' - ' + formatdate(sixd)).replace(/,/g, '');
  //   document.getElementById('date3').innerHTML = (formatdate(sevend) + ' - ' + formatdate(thirteend)).replace(/,/g, '');
  //   document.getElementById('date4').innerHTML = (formatdate(fourteend) + ' - ' + formatdate(twentyd)).replace(/,/g, '');
  //   document.getElementById('date5').innerHTML = (formatdate(twentyeightd) + ' - ' + formatdate(thirtyfod)).replace(/,/g, '');
  //   document.getElementById('date6').innerHTML = (formatdate(fofid) + ' - ' + formatdate(fioned)).replace(/,/g, '');
  //
  // function formatdate(init) {
  //   var thingy = new Date(init).toLocaleDateString('en-GB', {
  //     day : 'numeric',
  //     month : 'short',
  //     weekday : 'short',
  //   }).split(' ').join(' ');
  //     return thingy;
  //   }

    /////////////////////////////
    /////--End Date Stuff--//////
    /////////////////////////////

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

    });

    $('#reviewexpressa').click(function() {
      var starz = parseInt($('#starz').val(), 10);
      var tostars = parseInt($('#tostarts').val(), 10);
      vacas += 1;
      starz -= 0;
      $('#starz').val(starz);
      $('#totescost').val(388/7);
      starzee(starz);
    });

    $('#reviewexpressb').click(function() {
      var starz = parseInt($('#starz').val(), 10);
      var tostars = parseInt($('#tostarts').val(), 10);
      vacas += 1;
      starz -= 1;
      $('#starz').val(starz);
      $('#totescost').val(189/7);
      starzee(starz);
    });
  }
});
