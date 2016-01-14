$(document).ready(function() {

  $("form#blanks").submit(function(event){
    var location = $("input[name='locationOptions']:checked").val();
    var price = $("input[name='priceOptions']:checked").val();
    var type = $("input[name='foodOptions']:checked").val();


    if (location === 'east'){

      if (price === 'cheap'){
        if (type === 'american'){

          var restaurant ="Interurban";
          $(".restaurantSelection").text(restaurant);
        } else if (type === 'french'){
          var restaurant ="Petite Provence";
          $(".restaurantSelection").text(restaurant);
        } else {
          var restaurant ="Enzo's Cafe Italian";
          $(".restaurantSelection").text(restaurant);
        }

      } else {
        if (type === 'american'){
          var restaurant ="Holdfast Dining";
          $(".restaurantSelection").text(restaurant);
        } else if (type === 'french'){
          var restaurant ="Le Pigeon";
          $(".restaurantSelection").text(restaurant);
        } else {
          var restaurant ="Ava Gene's";
          $(".restaurantSelection").text(restaurant);
        }
      }


    } else  {
      if (price === 'cheap'){
        if (type === 'american'){
          var restaurant ="Tasty & Alder";
          $(".restaurantSelection").text(restaurant);
        } else if (type === 'french'){
          var restaurant ="Le Happy";
          $(".restaurantSelection").text(restaurant);
        } else {
          var restaurant ="Grassa";
          $(".restaurantSelection").text(restaurant);
        }

      }else {
        if (type === 'american'){
          var restaurant ="Nomad PDX";
          $(".restaurantSelection").text(restaurant);
        } else if (type === 'french'){
          var restaurant ="Paley's Place";
          $(".restaurantSelection").text(restaurant);
        } else {
          var restaurant ="Mucca Osteria";
          $(".restaurantSelection").text(restaurant);
          $alert(restaurant);
        }
      }
    }
    $(".results").show();
    alert(restaurant);

    event.preventDefault();
      console.log(restaurant)
  });



});
