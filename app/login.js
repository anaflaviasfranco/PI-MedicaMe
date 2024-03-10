function fazerLogin() {

    try{
        var email = $("#exampleInputEmail1").val();
        var senha = $("#exampleInputPassword1").val();
		var data = {
			endpoint : '',
			method : 'POST',
			options : {
				encoding : "UTF-8",
				mediaType: "application/json"
			},
			headers: {
				"Content-Type": "application/json"
			},
			params : {
				"email":email,
				"senha":senha
			}
		}


	} catch(err) {
		window.alert("Erro ao fazer login: " + err);
		throw ("Erro ao fazer login: " + err);
	}
	return true
}
   /* localStorage.setItem('token', 'seu_token_aqui');
    window.location.href = 'home.html';*/
    if(fazerLogin()){
        window.location.href = 'home.html';
    }
