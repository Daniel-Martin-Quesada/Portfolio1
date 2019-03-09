
$(document).ready(function(){

    $(".volver").click(function(){
        $(".info").slideUp("500");
        $(".volver").slideUp("500");
        $(".coche").slideDown("500");
    });
        

    $("#clasico").click(function(){
        $(".coche").hide();
        $("#panel1").slideDown("500");
        $(".volver").slideDown("500");
    });

    $("#shelby").click(function(){
        $(".coche").hide();
        $("#panel2").slideDown("500");
        $(".volver").slideDown("500");
    });
    

    $("#gt2017").click(function(){
        $(".coche").hide();
        $("#panel3").slideDown("500");
        $(".volver").slideDown("500");
    });


    $("#gt2018").click(function(){
        $(".coche").hide();
        $("#panel4").slideDown("500");
        $(".volver").slideDown("500");
    });


    $("#gt2019").click(function(){
        $(".coche").hide();
        $("#panel5").slideDown("500");
        $(".volver").slideDown("500");
    });

    $("#muscle").click(function(){
        $(".coche").hide();
        $("#panel6").slideDown("500");
        $(".volver").slideDown("500");
    });

    $(".info").click(function(){
        $("p").show();
    });
});