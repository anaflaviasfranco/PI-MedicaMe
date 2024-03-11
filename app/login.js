function fazerLogin() {

    var email = $("#exampleInputEmail1").val();
    var senha = $("#exampleInputPassword1").val();

    var dados = {
        email: email,
        senha: senha
    };

    var url = 'add url depois';

    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dados),
        success: function() {
            window.location.href = 'home.html';
        },
        error: function(xhr, status, error) {
        window.alert('Usuário inexistente')
        }
    });

}
