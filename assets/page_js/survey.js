$(document).ready(function(){

  var q1, q2, q3, q4, q5, q6, q7, q8, q9, vacainflation, ownerinflation, ownerexchange, vacadiff, vacanoinflation;

  $("#trigger").click(function() {
    if (!$('#gc1').hasClass("newClass")) {
      $("#gc1").toggleClass("newClass");
      $("#gc2").toggleClass("newClass");
      q1 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById("survey1").innerHTML = q1;
      document.getElementById("gs1").innerHTML = document.getElementById("gc1").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("150");
      }
    } else if (!$('#gc2').hasClass("newClass")) {
      $("#gc2").toggleClass("newClass");
      $("#gc3").toggleClass("newClass");
      q2 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById('survey2').innerHTML= q2;
      document.getElementById("gs2").innerHTML = document.getElementById("gc2").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("7");
      }
    } else if (!$('#gc3').hasClass("newClass")) {
      $("#gc3").toggleClass("newClass");
      $("#gc4").toggleClass("newClass");
      q3 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById('survey3').innerHTML= q3;
      document.getElementById("gs3").innerHTML = document.getElementById("gc3").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("10");
      }
      else {
        $("#surveyvalue").val("10");
      }
    } else if (!$('#gc4').hasClass("newClass")) {
      $("#gc4").toggleClass("newClass");
      $("#gc5").toggleClass("newClass");
      q4 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById('survey4').innerHTML= q4;
      document.getElementById("gs4").innerHTML = document.getElementById("gc4").innerHTML;
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("5");
      }
      else {
        $("#surveyvalue").val("3");
      }
    } else if (!$('#gc5').hasClass("newClass")) {
      $('.thumbpic').hide();
      $("#gc5").toggleClass("newClass");
      q5 = parseInt(document.getElementById('surveyvalue').value);

      document.getElementById('survey5').innerHTML = q5;
      document.getElementById("gs5").innerHTML = document.getElementById("gc5").innerHTML;

      $("#trigger").toggleClass("newClass");
      $("#up").toggleClass("newClass");
      $("#down").toggleClass("newClass");
      $("#surveyvalue").toggleClass("newClass");
      $("#surveydesc").toggleClass("newClass");
      $("#surveydesd").toggleClass("newClass");

      if ($('#gc1').hasClass("owner")) {
        ownerinflation = parseInt(q1*(Math.pow((1+(.01*q5)),q4)-1)/(.01*q5));
        ownerexchange = parseInt(q4*(q3+q2));
        document.getElementById('ownermaintenance').innerHTML = '$' + ownerinflation.toString();
        document.getElementById('ownerexchange').innerHTML = '$' + ownerexchange.toString();
        document.getElementById('interestperyear').innerHTML = ' (+' + q5 + '% Increase per Year)';
        document.getElementById('totalyears').innerHTML = ' (' + q4 + ' Years)';
        document.getElementById('totalyears2').innerHTML = ' (' + q4 + ' Years)';
        document.getElementById('totalowner').innerHTML = '$' + (ownerinflation + ownerexchange).toString();
      }
      else {
        document.getElementById('inflationheader').innerHTML = 'Inflation: % ' + q5;
        vacainflation = (Math.ceil(q1/2)*q2*q3*(Math.pow((1+(.01*q5)),q4)-1)/(.01*q5)).toFixed(2);
        vacanoinflation = (Math.ceil(q1/2)*q2*q3*q4).toFixed(2);
        vacadiff = vacainflation - vacanoinflation;
        document.getElementById('totalcost').innerHTML = vacanoinflation;
        document.getElementById('totalcost2').innerHTML = vacanoinflation;
        document.getElementById('totaldiff').innerHTML = vacadiff;
        document.getElementById('totalinflation').innerHTML = vacainflation;
      }

      $('.pic-wrapper').fireworks({
        sound: false
      });
    }
  });

  $("#up").click(function() {
    var survey_val = document.getElementById("surveyvalue");
    if (!$('#gc1').hasClass("newClass")) {
        survey_val.stepUp(2);
    }
    else if (!$('#gc2').hasClass("newClass")) {
        survey_val.stepUp(10);
    }
    else if (!$('#gc3').hasClass("newClass")) {
        survey_val.stepUp(2);
    }
    else if (!$('#gc4').hasClass("newClass")) {
        survey_val.stepUp(2);
    }
    else if (!$('#gc5').hasClass("newClass")) {
        survey_val.stepUp(1);
    }
    /*
    else if (!$('#gc6').hasClass("newClass")) {
        if(survey_val.value == "Studio")
          {survey_val.value = "Hotel";}
        else if(survey_val.value == "Hotel")
          {survey_val.value = "Condo";}
        else if(survey_val.value == "Condo")
          {survey_val.value = "Studio";}
    }*/
  });

  $("#down").click(function() {
    if (!$('#gc1').hasClass("newClass")) {
      document.getElementById("surveyvalue").stepDown(2);
    } else if (!$('#gc2').hasClass("newClass")) {
      document.getElementById("surveyvalue").stepDown(10);
    } else if (!$('#gc3').hasClass("newClass")) {
      document.getElementById("surveyvalue").stepDown(2);
    } else if (!$('#gc4').hasClass("newClass")) {
      document.getElementById("surveyvalue").stepDown(2);
    } else if (!$('#gc5').hasClass("newClass")) {
      document.getElementById("surveyvalue").stepDown(1);
    }
  });
});
