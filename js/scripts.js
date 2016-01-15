$(document).ready(function() {

  $("form#blanks").submit(function(event){
    var location = $("input[name='locationOptions']:checked").val();
    var price = $("input[name='priceOptions']:checked").val();
    var type = $("input[name='foodOptions']:checked").val();


    if (location === 'east'){

      if (price === 'cheap'){
        if (type === 'american'){

          var restaurant ="Interurban";
        } else if (type === 'french'){
          var restaurant ="Petite Provence";
        } else {
          var restaurant ="Enzo's Cafe Italian";
        }

      } else {
        if (type === 'american'){
          var restaurant ="Holdfast Dining";
        } else if (type === 'french'){
          var restaurant ="Le Pigeon";
        } else {
          var restaurant ="Ava Gene's";
        }
      }


    } else  {
      if (price === 'cheap'){
        if (type === 'american'){
          var restaurant ="Tasty & Alder";
        } else if (type === 'french'){
          var restaurant ="Le Happy";
        } else {
          var restaurant ="Grassa";
        }

      }else {
        if (type === 'american'){
          var restaurant ="Nomad PDX";
        } else if (type === 'french'){
          var restaurant ="Paley's Place";
        } else {
          var restaurant ="Mucca Osteria";

        }
      }
    }
    $(".results").show();
    $(".restaurantSelection").text(restaurant);

    event.preventDefault();

  });



});
