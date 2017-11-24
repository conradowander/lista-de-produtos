$(document).ready(function(e){
    
    $("#btnadd").click(function(event){
        var elemento = $("#elemento").val();
        
        if (elemento == ""){
            console.log("Elemento inixistente");
        }else{
            $("li:last").after('<li class="list-group-item"><span class="pull-left">' +
                elemento + '</span><span class="badge pull-left">0</span><button type="button" class="btn btn-default pull-right glyphicon glyphicon-plus-sign"></button></li>');
        }
        event.preventDefault();
    });

    $("ul").on('click', 'li', function(){
        var badge = $(this).children('.badge');
        var contador = parseInt(badge.html());
        
        if (contador == 0) {
            badge.html(contador + 1);
        } else {
            $("#alerta").modal('show');
            badge.html('0');
        }
        $(this).toggleClass('active');

    });
    
    $("ul").on('click', 'button', function(){
        var badge = $(this).siblings('.badge')
        var contador = parseInt(badge.html());
        
        if (contador == 0) {
            $(this).parent('li').addClass('active')
        }
        badge.html(contador + 1);

        return false;
    });

});