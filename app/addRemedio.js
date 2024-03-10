function addRemedio(){
    var nomeRemedio = $('#nomeRemedio').val();
    var descricao = $('#descricao').val();
    var horario = $('#horarioRemedio').val();
    var checkboxes = $('[name="diaSemana"]:checked');
    var diasSelecionados = checkboxes.map(function() {
        return this.value;
    }).get().join(', ');

    var otherDocUrl = 'remedios.html?nome=' + encodeURIComponent(nomeRemedio) + '&descricao=' + encodeURIComponent(descricao) + '&horario=' + encodeURIComponent(horario) + '&dias=' + encodeURIComponent(diasSelecionados);
    window.location.href = otherDocUrl;
}

