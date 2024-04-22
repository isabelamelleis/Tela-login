var usuario = {
    nome: "isabela",
    senha: "1234"
}

function login() {
    let nome = document.getElementById('nome').value; //pega o input do html e coloca na variável nome
    let senha = document.getElementById('senha').value;
    if (nome == usuario.nome && senha == usuario.senha) {
        /*var mostrarNome = document.getElementById("nomeUsuario");
        var mostrarSenha = document.getElementById("senhaUsuario");
        mostrarNome.innerHTML = usuario.nome;
        mostrarSenha.innerHTML = usuario.senha;*/
        location.replace ("mostrarLogin.html");  // "location.replace" faz com que mude de página. A diferença entre ele e "window.location.href" é que com o location.replace o usuário não consegue voltar para a tela anterior usando o botão de voltar.
    } else {
        alert("Usuário ou senha incorretos.");
    }
}