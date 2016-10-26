$(document).ready(function(){
  $("#gc1").css({ opacity: 1 });
  var q1, q2, q3, q4, q5, q6, q7, q8, q9, vacainflation, ownerinflation, ownerexchange, vacadiff, vacanoinflation;

  $("#trigger").click(function() {
    if ($('#gc1').css('opacity') == 1) {
      $("#gc1").css({ opacity: 0 });
      $("#gc2").css({ opacity: 1 });
      q1 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById("survey1").innerHTML = q1.toString();
      document.getElementById("gs1").innerHTML = document.getElementById("gc1").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("150");
      }
    } else if ($('#gc2').css('opacity') == 1) {
      $("#gc2").css({ opacity: 0 });
      $("#gc3").css({ opacity: 1 });
      q2 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById('survey2').innerHTML= q2.toString();
      document.getElementById("gs2").innerHTML = document.getElementById("gc2").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("7");
      }
    } else if ($('#gc3').css('opacity') == 1) {
      $("#gc3").css({ opacity: 0 });
      $("#gc4").css({ opacity: 1 });
      q3 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById('survey3').innerHTML= q3.toString();
      document.getElementById("gs3").innerHTML = document.getElementById("gc3").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("10");
      }
      else {
        $("#surveyvalue").val("10");
      }
    } else if ($('#gc4').css('opacity') == 1) {
      $("#gc4").css({ opacity: 0 });
      $("#gc5").css({ opacity: 1 });
      q4 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById('survey4').innerHTML= q4.toString();
      document.getElementById("gs4").innerHTML = document.getElementById("gc4").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("5");
      }
      else {
        $("#surveyvalue").val("3");
      }
    } else if ($('#gc5').css('opacity') == 1) {
      $('.thumbpic').hide();
      $("#gc5").css({ opacity: 0 });
      q5 = parseInt(document.getElementById('surveyvalue').value);

      document.getElementById('survey5').innerHTML = q5.toString();
      document.getElementById("gs5").innerHTML = document.getElementById("gc5").innerHTML;

      $("#trigger,#up,#down,#surveyvalue,#surveydesd,#surveydesc").css({ opacity: 0 });
      $('#reviewbox,#gs1,#gs2,#gs3,#gs4,#gs5,#survey1,#survey2,#survey3,#survey4,#survey5').css({ opacity: 1 });
      $("#questiontable").toggleClass("deadClass");

      if ($('#gc1').hasClass("owner")) {
        ownerinflation = (q1*(Math.pow((1+(.01*q5)),q4)-1)/(.01*q5));
        ownerexchange = (q4*(q3+q2));
        document.getElementById('ownermaintenance').innerHTML = '$' + ownerinflation.toString();
        document.getElementById('ownerexchange').innerHTML = '$' + ownerexchange.toString();
        document.getElementById('interestperyear').innerHTML = ' (+' + q5 + '% Increase per Year)';
        document.getElementById('totalyears').innerHTML = ' (' + q4 + ' Years)';
        document.getElementById('totalyears2').innerHTML = ' (' + q4 + ' Years)';
        document.getElementById('totalowner').innerHTML = ('$' + (ownerinflation + ownerexchange).toString()).ToFixed(2);
      }
      else {
        document.getElementById('inflationheader').innerHTML = q5;
        vacainflation = (Math.ceil(q1/2)*q2*q3*(Math.pow((1+(.01*q5)),q4)-1)/(.01*q5)).toFixed(2);
        vacanoinflation = (Math.ceil(q1/2)*q2*q3*q4).toFixed(2);
        vacadiff = parseFloat(vacainflation - vacanoinflation).toFixed(2);
        document.getElementById('inflationheader').innerHTML = q5.toString() + '%';
        document.getElementById('totalcost').innerHTML = vacanoinflation;
        document.getElementById('totalcost2').innerHTML = vacanoinflation;
        document.getElementById('totaldiff').innerHTML = vacadiff;
        document.getElementById('totalinflation').innerHTML = vacainflation;
      }

      $('.pic-wrapper').fireworks({
        sound: false,
        opacity: 0.5
      });
    }
  });

  $("#up").click(function() {
    if ($('#gc1').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(10)}
      else
        {document.getElementById("surveyvalue").stepUp(2);}
    } else if ($('#gc2').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(10)}
      else
        {document.getElementById("surveyvalue").stepUp(10);}
    } else if ($('#gc3').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(10)}
      else
        {document.getElementById("surveyvalue").stepUp(2);}
    } else if ($('#gc4').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(2)}
      else
        {document.getElementById("surveyvalue").stepUp(2);}
    } else if ($('#gc5').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(1)}
      else
        {document.getElementById("surveyvalue").stepUp(1);}
    }
  });

  $("#down").click(function() {
    if ($('#gc1').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(10)}
      else
        {document.getElementById("surveyvalue").stepDown(2);}
    } else if ($('#gc2').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(10)}
      else
        {document.getElementById("surveyvalue").stepDown(10);}
    } else if ($('#gc3').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(10)}
      else
        {document.getElementById("surveyvalue").stepDown(2);}
    } else if ($('#gc4').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(2)}
      else
        {document.getElementById("surveyvalue").stepDown(2);}
    } else if ($('#gc5').css('opacity') == 1) {
      if ($('#gc1').hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(1)}
      else
        {document.getElementById("surveyvalue").stepDown(1);}
    }
  });
});
