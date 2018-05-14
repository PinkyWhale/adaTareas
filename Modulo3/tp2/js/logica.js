/*
Ayuda Memoria=

Syntaxis Basica:
$(selector).action()

$(this).action -- es cuando ya habias llamado al elemento
 
$(".test").action -- Acá llama a una clase

$("img").css(background:) -- Acá cambia la cara

*/

$(document).ready(function(){
    // inicializacion de array y cantidad
    var mazo = [];
    var cantCartas = 12;
    var intentos = 24;

    // Funcion para mesclar las cartas
    function shuffle(arrayR) {
        var j, x, i;
        for (i = arrayR.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arrayR[i];
            arrayR[i] = arrayR[j];
            arrayR[j] = x;
        }
        return arrayR;
    }

    // insertar cartas con sus id
    for (var i = 0; i < cantCartas; i = i + 1){
        var carta = $("<img></img>").attr("src","img/dorso.jpg").attr("class", "carta").attr("id", "card"+i);
        mazo.push(carta);
        
    }

    // Generacion de data para asignar el valor de la imagen
    for(var i = 0; i < cantCartas / 2; i = i + 1){
        mazo[i] = mazo[i].attr("data-id", "codigo" + (i+1));
        mazo[(cantCartas / 2)+i] = mazo[(cantCartas / 2)+i].attr("data-id", "codigo" + (i+1));
    }

    // Desordeno el mazo
    shuffle(mazo);

        for(var i = 0; i<mazo.length; i = i + 1 ){
                $("#board").append(mazo[i]);
            
        }
    
    

    function mostrarCarta(){
        $(this).attr('src', 'img/' + $(this).data('id') +'.png');
    }

    function ocultarCarta(){
        $(this).attr('src', 'img/dorso.jpg');

    }

    var dataCompare = null;
        $.fn.checkCardData = function(){
            if (dataCompare == null){
                dataCompare = "#"+$(this).attr('id');
                // console.log(dataCompare);
            }else if($(dataCompare).data('id') == $(this).data('id')){
                // console.log($(dataCompare));
                console.log($(this).data('id'));
                console.log(dataCompare+"1");
                dataCompare = null;      
            }else{
                console.log(dataCompare+"2");
                intentos = intentos - 1;
                $(dataCompare).fadeTo("slow", 3, ocultarCarta).fadeTo("slow",1);
                $(this).fadeTo("slow", 3, ocultarCarta).fadeTo("slow",1);
                // dataCompare = null;
                // $('img').attr()//
            }
        };  

    $(".carta").click(function(){
        $(this).fadeTo("slow", 0.3, mostrarCarta).fadeTo("slow",1);
        setTimeout($(this).checkCardData(), 3000);
        // $(this).checkCardData();
    });



});


