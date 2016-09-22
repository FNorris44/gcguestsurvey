$(document).ready(function(){
    $('#trigger').click(function(){
      if ((this).is(hover))
      {
        $('#gc1').toggleClass('newClass');
        $('#gc2').toggleClass('newClass');
      }
  })
});
