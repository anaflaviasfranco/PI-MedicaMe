$(document).ready(function() {
    $('#horarioRemedio').mask('00:00');
});
function addRemedio(){
    var nomeRemedio = $('#nomeRemedio').val();
    var descricao = $('#descricao').val();
    var horario = $('#horarioRemedio').val();
    var checkboxes = $('[name="diaSemana"]:checked');
    var diasSelecionados = checkboxes.map(function() {
        return this.value;
    }).get().join(', ');
    var primaryKey = Date.now();
    $('#timeStamp').val(primaryKey);
    var timeStamp = $('#timeStamp').val();
    
    if(nomeRemedio == "" || horario == "" || diasSelecionados == ""){
        window.alert("Campos obrigatórios: \n- Nome do remédio\n- Horário do remédio\n- Dia da semana")
    } else{
        var otherDocUrl = 'remedios.html?nome=' + encodeURIComponent(nomeRemedio) + '&descricao=' + encodeURIComponent(descricao) + '&horario=' + encodeURIComponent(horario) + '&dias=' + encodeURIComponent(diasSelecionados) + '&timeStamp=' + encodeURIComponent(timeStamp);
        window.location.href = otherDocUrl;
    }
}


