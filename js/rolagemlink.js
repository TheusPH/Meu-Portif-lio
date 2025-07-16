$(document).ready(function() {

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var id = $(this).attr('href'); 
        if ($(id).length > 0) {
            var targetOffset = $(id).offset().top;
            var offsetForFixedHeader = 80; 

            $('html, body').animate({
                scrollTop: targetOffset - offsetForFixedHeader
            }, 1000);
        } else {
            console.warn(`Elemento de destino com ID "${id}" não encontrado na página. Verifique o href do link.`);
        }
    });

});