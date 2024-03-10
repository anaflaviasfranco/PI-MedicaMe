$(document).ready(function(){

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }


    var nomeRemedio = getParameterByName('nome');
    var descricao = getParameterByName('descricao');
    var horario = getParameterByName('horario');
    var diasSelecionados = getParameterByName('dias');

    if(nomeRemedio != null){
        var newContent = $('<div>').addClass('container').append(
            $('<div>').addClass('horario').append(
                $('<h3>').attr('id', 'horario').text(horario),
                $('<h3>').attr('id', 'diaSemana').text(diasSelecionados)
            ),
            $('<div>').addClass('descRemedio').append(
                $('<h3>').attr('id', 'nomeRemedio').text(nomeRemedio),
                $('<h3>').attr('id', 'descricao').text(descricao),
                $('<button>').attr('type', 'submit').addClass('btn btn-lg btn-finalizar').text('Finalizar')
            )
        );
    
        $('#content').append(newContent);
    
    }


    $(document).on('click', '.btn-finalizar', function() {
        $(this).closest('.container').remove();
    });
});
