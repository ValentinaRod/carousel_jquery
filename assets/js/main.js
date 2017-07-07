$(document).ready(function(){
    // Activar el carousel
    $("#myCarousel").carousel();
    
    // indicadores del carouseñ
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(4);
    });
    $(".item5").click(function(){
        $("#myCarousel").carousel(5);
    });
    
    // Controloles del carousel.
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
         interval: 5000
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
         interval: 5000
    });
});  

