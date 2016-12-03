$(document).ready(function(){
  var location, totescost, roomcount, starz = 6, vacas = 1, totstars = 1,
      q1, q2, q3, q4, q5, q6, q7, q8, q9, vacainflation, ownerinflation,
      ownerexchange, vacadiff,vacanoinflation;

  $("#gc1").css({ opacity: 1 });

  if ($("#destinationchoice").hasClass("express")) {
    var today = new Date(), sixd = new Date(), sevend = new Date(),
        thirteend = new Date(), fourteend = new Date(), twentyd = new Date(),
        twentyeightd = new Date(), thirtyfod = new Date(), fofid = new Date(),
        fioned = new Date();

    sixd.setDate(today.getDate()+6);
    sevend.setDate(today.getDate()+7);
    thirteend.setDate(today.getDate()+13);
    fourteend.setDate(today.getDate()+14);
    twentyd.setDate(today.getDate()+20);
    twentyeightd.setDate(today.getDate()+28);
    thirtyfod.setDate(today.getDate()+34);
    fofid.setDate(today.getDate()+45);
    fioned.setDate(today.getDate()+51);

    document.getElementById('date1').innerHTML = (formatdate(today) + ' - ' + formatdate(sixd)).replace(/,/g, '');
    document.getElementById('date2').innerHTML = (formatdate(today) + ' - ' + formatdate(sixd)).replace(/,/g, '');
    document.getElementById('date3').innerHTML = (formatdate(sevend) + ' - ' + formatdate(thirteend)).replace(/,/g, '');
    document.getElementById('date4').innerHTML = (formatdate(fourteend) + ' - ' + formatdate(twentyd)).replace(/,/g, '');
    document.getElementById('date5').innerHTML = (formatdate(twentyeightd) + ' - ' + formatdate(thirtyfod)).replace(/,/g, '');
    document.getElementById('date6').innerHTML = (formatdate(fofid) + ' - ' + formatdate(fioned)).replace(/,/g, '');

  function formatdate(init) {
    var thingy = new Date(init).toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'short',
      weekday : 'short',
    }).split(' ').join(' ');
      return thingy;
    }
  }
  //
  // $(document).keydown(function (event) {
  //   if (event.ctrlKey == true && (event.which == "107" || event.which == "109" || event.which == "187" || event.which == "189")) {
  //      event.preventDefault();
  //   }
  // });
  //
  // $(window).bind("mousewheel DOMMouseScroll", function (event) {
  //   if (event.ctrlKey == true) {
  //     event.preventDefault();
  //   }
  // });
  //
  // $(document).keydown(function(event) {
  //   if ((event.ctrlKey === true) && ((event.which === '107') || (event.which === '109'))) {
  //       alert("disabling zooming!");
  //       event.preventDefault();
  //    }
  //  });

  $("#reviewbook").click(function() {
    starz -= totstars;
    totescost = 189/7;
    starzee(starz);
  });

  $("#reviewexpressa").click(function() {
     starz -= 1;
     totescost = 388/7;
     starzee(starz);
  });

  $("#reviewexpressb").click(function() {
    starz -= 2;
    totescost = 189/7;
    starzee(starz);
  });

  function starzee(init) {
    if (starz < 1) {document.getElementById("starz1").src = "/images/emptystar.jpg";}
    if (starz < 2) {document.getElementById("starz2").src = "/images/emptystar.jpg";}
    if (starz < 3) {document.getElementById("starz3").src = "/images/emptystar.jpg";}
    if (starz < 4) {document.getElementById("starz4").src = "/images/emptystar.jpg";}
    if (starz < 5) {document.getElementById("starz5").src = "/images/emptystar.jpg";}
    if (starz < 6) {document.getElementById("starz6").src = "/images/emptystar.jpg";}

    $('#reviewbox').toggleClass('deadClass');
    $('#reviewcongrats').toggleClass('deadClass');

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
    document.getElementById("congratsprice").innerHTML = totescost.toFixed(0);
    document.getElementById("moztars").innerHTML = totstars;
  }

    if (starz < 1) {
      document.getElementById("mostars").innerHTML = "You just booked " + vacas + " vacations for only 6 stars!";
      $("#booknew").toggleClass("deadClass");
    }

    $(".pic-wrapper").fireworks({
      sound: false,
      opacity: 0.5
    });
  }

  $("#booknew").click(function() {
    $("#destinationchoice").toggleClass("deadClass");
    $("#reviewcongrats").toggleClass("deadClass");
    vacas += 1;
  });

  $("#trigger").click(function() {
    if ($("#gc1").css("opacity") == 1) {
      $("#gc1").css({ opacity: 0 });
      $("#gc2").css({ opacity: 1 });
      q1 = parseInt(document.getElementById("surveyvalue").value);
      document.getElementById("survey1").innerHTML = q1.toString();
      document.getElementById("gs1").innerHTML = document.getElementById("gc1").innerHTML;
      if ($("#gc1").hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("150");
      }
    } else if ($("#gc2").css("opacity") == 1) {
      $("#gc2").css({ opacity: 0 });
      $("#gc3").css({ opacity: 1 });
      q2 = parseInt(document.getElementById("surveyvalue").value);
      document.getElementById("survey2").innerHTML= q2.toString();
      document.getElementById("gs2").innerHTML = document.getElementById("gc2").innerHTML;
      if ($("#gc1").hasClass("owner")) {
        $("#surveyvalue").val("75");
      }
      else {
        $("#surveyvalue").val("7");
      }
    } else if ($("#gc3").css("opacity") == 1) {
      $("#gc3").css({ opacity: 0 });
      $("#gc4").css({ opacity: 1 });
      q3 = parseInt(document.getElementById("surveyvalue").value);
      document.getElementById("survey3").innerHTML= q3.toString();
      document.getElementById("gs3").innerHTML = document.getElementById("gc3").innerHTML;
      if ($("#gc1").hasClass("owner")) {
        $("#surveyvalue").val("10");
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
      }
      else {
        $("#surveyvalue").val("3");
      }
    } else if ($("#gc5").css("opacity") == 1) {
      $("#questiontable").toggleClass("deadClass");
      $(".thumbpic").css({ opacity: 0 });
      $("#gc5").css({ opacity: 0 });
      q5 = parseInt(document.getElementById("surveyvalue").value);

      document.getElementById("survey5").innerHTML = q5.toString();
      document.getElementById("gs5").innerHTML = document.getElementById("gc5").innerHTML;

      $("#trigger,#up,#down,#surveyvalue,#surveydesd,#surveydesc").css({ opacity: 0 });
      $("#reviewbox,#gs1,#gs2,#gs3,#gs4,#gs5,#survey1,#survey2,#survey3,#survey4,#survey5").css({ opacity: 1 });

      if ($("#gc1").hasClass("owner")) {
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
        document.getElementById("inflationheader").innerHTML = q5;
        vacainflation = (Math.ceil(q1/2)*q2*q3*(Math.pow((1+(1.01*q5)),q4)-1)/(1.01*q5)).toFixed(2);
        vacanoinflation = (Math.ceil(q1/2)*q2*q3*q4).toFixed(2);
        vacadiff = parseFloat(vacainflation - vacanoinflation).toFixed(2);
        document.getElementById("inflationheader").innerHTML = q5.toString() + "%";
        document.getElementById("totalcost").innerHTML = vacanoinflation;
        document.getElementById("totalcost2").innerHTML = vacanoinflation;
        document.getElementById("totaldiff").innerHTML = vacadiff;
        document.getElementById("totalinflation").innerHTML = vacainflation;
      }

      $(".pic-wrapper").fireworks({
        sound: false,
        opacity: 0.5
      });
    }
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

  function revertdead() {
    if ($("#reviewbox").hasClass("deadClass")) {
      $("#reviewbox").toggleClass("deadClass");
    }
  }

  $("#Ireland").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });
  $("#Orlando").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });
  $("#Fiji").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });
  $("#StAugustine").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });
  $("#MyrtleBeach").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });
  $("#Italy").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });
  $("#Hawaii").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });
  $("#Daytona").click(function() {
    location = jQuery(this).attr("id");
    fiximages(location);
    revertdead();
    });


    function fiximages(init) {
      init = init.toLowerCase();
      $("#destinationchoice").addClass("deadClass");
      $("#reviewbox").css({ opacity: 1 });

      document.getElementById("vacalocation").innerHTML = init.toString();

      // document.getElementById("polaroidpic").src = "/images/polaroid" + init + ".jpg";
      document.getElementById("planpic1").src = "/images/polaroid" + init + "1.jpg";
      document.getElementById("planpic2").src = "/images/polaroid" + init + "2.jpg";
      document.getElementById("planpic3").src = "/images/polaroid" + init + "3.jpg";
      document.getElementById("planpic4").src = "/images/polaroid" + init + "4.jpg";
      document.getElementById("planpic5").src = "/images/polaroid" + init + "5.jpg";
    }

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
