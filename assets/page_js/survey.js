$(document).ready(function(){
  var location, totescost, roomcount, starz = 6, vacas = 1, totstars = 1,
      q1, q2, q3, q4, q5, q6, q7, q8, q9, vacainflation, ownerinflation,
      ownerexchange, vacadiff,vacanoinflation;

  $(".printbutt").click(function() {
    $('#fireworksField').remove();
  });

  $("#gc1").css({ opacity: 1 });

  if ($("#gc1").hasClass("owner")) {
    $("#surveyvalue").val("300");
    $("#surveycash").val("$");
  }
  else {
    $("#surveyvalue").val("2");
    $("#surveyperc").val("");
  }

  $("#trigger").click(function() {
    if ($("#gc1").css("opacity") == 1) {
      $("#gc1").css({ opacity: 0 });
      $("#gc2").css({ opacity: 1 });
      q1 = parseInt(document.getElementById("surveyvalue").value);
      if ($("#gc1").hasClass("owner")) {
        document.getElementById("survey1").innerHTML = "$" + q1.toString();
      }
      else {
        document.getElementById("survey1").innerHTML = q1.toString();
      }
      document.getElementById("gs1").innerHTML = document.getElementById("gc1").innerHTML;
      if ($("#gc1").hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("150");
        $("#surveycash").val("$");
      }
    } else if ($("#gc2").css("opacity") == 1) {
      $("#gc2").css({ opacity: 0 });
      $("#gc3").css({ opacity: 1 });
      q2 = parseInt(document.getElementById("surveyvalue").value);
      document.getElementById("survey2").innerHTML= "$" + q2.toString();
      document.getElementById("gs2").innerHTML = document.getElementById("gc2").innerHTML;
      if ($("#gc1").hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("7");
        $("#surveycash").val("");
      }
    } else if ($("#gc3").css("opacity") == 1) {
      $("#gc3").css({ opacity: 0 });
      $("#gc4").css({ opacity: 1 });
      q3 = parseInt(document.getElementById("surveyvalue").value);
      if ($("#gc1").hasClass("owner")) {
        document.getElementById("survey3").innerHTML = "$" + q3.toString();
      }
      else {
        document.getElementById("survey3").innerHTML = q3.toString();
      }
      document.getElementById("gs3").innerHTML = document.getElementById("gc3").innerHTML;
      if ($("#gc1").hasClass("owner")) {
        $("#surveyvalue").val("10");
        $("#surveycash").val("");
      }
      else {
        $("#surveyvalue").val("10");
      }
    } else if ($("#gc4").css("opacity") == 1) {
      $("#gc4").css({ opacity: 0 });
      $("#gc5").css({ opacity: 1 });
      q4 = parseInt(document.getElementById("surveyvalue").value);
      document.getElementById("survey4").innerHTML= q4.toString();
      document.getElementById("gs4").innerHTML = document.getElementById("gc4").innerHTML;
      if ($("#gc1").hasClass("owner")) {
        $("#surveyvalue").val("5");
        $("#surveyperc").val("%");
      }
      else {
        $("#surveyvalue").val("3");
        $("#surveyperc").val("%");
      }
    } else if ($("#gc5").css("opacity") == 1) {
      $("#questiontable").toggleClass("deadClass");
      document.getElementById("hheader").innerHTML = "Cost of Your Future Vacations";
      q5 = parseInt(document.getElementById("surveyvalue").value);
      document.getElementById("survey5").innerHTML = q5.toString() + "%";
      document.getElementById("gs5").innerHTML = document.getElementById("gc5").innerHTML;

      $("#up,#down,#surveyvalue,#questiontable,#surveyperc,#surveycash,#gc5").css({ opacity: 0 });
      $("#reviewleft").css({ opacity: 0.85 }).next().delay(225);
      $("#survey1,#survey2,#survey3,#survey4,#survey5,#trigger,.thumbpic").css({ opacity: 1 }).next().delay(450);
      $("#divDisplayButtons,#divDisplaysignbase").css({ opacity: 0.15 }).next().delay(225);

    } else if ($("#reviewleft").css("opacity") == 0.85) {
      $("#trigger,.thumbpic").css({ opacity: 0 });
      $(".printbutt").css({ opacity: 1 });
      $("#trigger").addClass("deadClass").delay(450);

      if ($("#gc1").hasClass("owner")) {
        $("#reviewrighta").css({ opacity: 0.85 }).next().delay(250);
        ownerinflation = (q1*(Math.pow((1+(0.01*q5)),q4)-1)/(0.01*q5));
        ownerexchange = (q4*(q3+q2));
        document.getElementById("ownermaintenance").innerHTML = "$" + parseInt(ownerinflation).toString();
        document.getElementById("ownerexchange").innerHTML = "$" + ownerexchange.toString();
        document.getElementById("interestperyear").innerHTML = " (+" + q5 + "% Increase per Year)";
        document.getElementById("totalyears").innerHTML = " (" + q4 + " Years)";
        document.getElementById("totalyears2").innerHTML = " (" + q4 + " Years)";
        document.getElementById("totalowner").innerHTML = "$" + (parseInt(ownerinflation + ownerexchange)).toString();
      }
      else {
        $("#reviewrighta,#reviewrightb").css({ opacity: 0.85 }).next().delay(250);
        document.getElementById("inflationheader").innerHTML = q5;
        vacainflation =  Math.ceil(q1/2)*q2*q3*((Math.pow((1+(0.01*q5)),q4)-1)/(0.01*q5));
        vacanoinflation = Math.ceil(q1/2)*q2*q3*q4;
        vacadiff = vacainflation - vacanoinflation;
        document.getElementById("inflationheader").innerHTML = q5.toString() + "%";
        document.getElementById("totalcost").innerHTML = "$" + parseInt(vacanoinflation);
        document.getElementById("totalcost2").innerHTML = "$" + parseInt(vacanoinflation);
        document.getElementById("totaldiff").innerHTML = "$" + parseInt(vacadiff);
        document.getElementById("totalinflation").innerHTML = "$" + parseInt(vacainflation);
      }

      $(".pic-wrapper").fireworks({
        sound: false,
        opacity: 0.5
      });
    }
    else {}
  });

  $("#up").click(function() {
    if ($("#gc1").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(100)}
      else
        {document.getElementById("surveyvalue").stepUp(2);}
    } else if ($("#gc2").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(50)}
      else
        {document.getElementById("surveyvalue").stepUp(10);}
    } else if ($("#gc3").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(10)}
      else
        {document.getElementById("surveyvalue").stepUp(2);}
    } else if ($("#gc4").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(2)}
      else
        {document.getElementById("surveyvalue").stepUp(2);}
    } else if ($("#gc5").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepUp(1)}
      else
        {document.getElementById("surveyvalue").stepUp(1);}
    }
  });

  $("#down").click(function() {
    if ($("#gc1").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(100)}
      else
        {document.getElementById("surveyvalue").stepDown(2);}
    } else if ($("#gc2").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(50)}
      else
        {document.getElementById("surveyvalue").stepDown(10);}
    } else if ($("#gc3").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(10)}
      else
        {document.getElementById("surveyvalue").stepDown(2);}
    } else if ($("#gc4").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(2)}
      else
        {document.getElementById("surveyvalue").stepDown(2);}
    } else if ($("#gc5").css("opacity") == 1) {
      if ($("#gc1").hasClass("owner"))
        {document.getElementById("surveyvalue").stepDown(1)}
      else
        {document.getElementById("surveyvalue").stepDown(1);}
    }
  });
});
