$(document).ready(function(){

  var q1, q2, q3, q4, q5, q6, q7, q8;

  $("#trigger").click(function() {
    if (!$('#gc1').hasClass("newClass")) {
      $("#gc1").toggleClass("newClass");
      $("#gc2").toggleClass("newClass");
      q1 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById("survey1").innerHTML = q1;
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
      if ($('#gc1').hasClass("owner")) {
        $("#surveyvalue").val("5");
      }
      else {
        $("#surveyvalue").val("3");
      }
    } else if (!$('#gc5').hasClass("newClass")) {
      $('.thumbpic').hide();

      q5 = parseInt(document.getElementById('surveyvalue').value);
      document.getElementById('survey5').innerHTML = q5;

      $("#gc1").toggleClass("newClass");
      $("#gc6").toggleClass("newClass");
      $("#gc2").toggleClass("newClass");
      $("#gc3").toggleClass("newClass");
      $("#gc4").toggleClass("newClass");

      $("#survey1").toggleClass("newClass");
      $("#survey2").toggleClass("newClass");
      $("#survey3").toggleClass("newClass");
      $("#survey4").toggleClass("newClass");
      $("#survey5").toggleClass("newClass");
      $("#survey6").toggleClass("newClass");
      $("#owner6").toggleClass("newClass");
      $("#owner7").toggleClass("newClass");

      $("#answers").toggleClass("newClass");
      $("#trigger").toggleClass("newClass");
      $("#up").toggleClass("newClass");
      $("#down").toggleClass("newClass");
      $("#surveyvalue").toggleClass("newClass");
      $("#surveydesc").toggleClass("newClass");
      $("#surveydesd").toggleClass("newClass");
      q6 = (Math.ceil(q1/2)*q2*q3*(Math.pow((1+(.01*q5)),q4)-1)/(.01*q5)).toFixed(2);
      q7 = (q1*(Math.pow((1+(.01*q5)),q4)-1)/(.01*q5)).toFixed(2);
      q8 = q4*(q3+q2);
      document.getElementById('survey6').innerHTML= q6;
      document.getElementById('owner6').innerHTML = q7;
      document.getElementById('owner7').innerHTML = q8;
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
