$(document).ready(function(){
   var $p = $('.input');
  $("button").click(function(){
    $p.css('visibility', 'visible');
  });

  var options = {
      useEasing : false, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.' 
    }

    var demo = new countUp("timercountup1", 0, 152, 0, 1.25, options);
    demo.start();

      var demo = new countUp("timercountup2", 0, 17, 0, 1.25, options);
          demo.start();

      var demo = new countUp("timercountup3", 0, 8, 0, 1.25, options);
          demo.start();
});

