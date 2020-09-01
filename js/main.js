(function(){
    "use strict";
    
    
    document.addEventListener('DOMContentLoaded', function(){
        var map = L.map('mapa').setView([16.868558, -99.905226], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([16.868558, -99.905226]).addTo(map)
            .bindPopup('Jose Luis Gomez Montalvan, <br/> CompuCell')
            .openPopup();
        

        
        
        
    });
})();

$(function(){
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    
    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
       
    });

    //MENU

    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }

    });

    //MENU CELULAR

    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
        

    });



    
    //LETTERING
    $('.nombre-sitio').lettering();



    //ANIMACIONES PARA LOS NUMEROS
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 1600);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1500);



    //CUENTA REGRESIVA

    $('.cuenta-regresiva').countdown('2021/06/22 00:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));

    });



});


