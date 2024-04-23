var usuario = {
    nome: "isabela",
    senha: "1234"
}

function login() {
    let nome = document.getElementById('nome').value; // Atribui o conteúdo do input na variável "nome".
    let senha = document.getElementById('senha').value;
    if (nome == usuario.nome && senha == usuario.senha) { // Se a sentença for correta, redireciona o usuário para outra página. 
        location.replace ("mostrarLogin.html");  // "location.replace" faz com que mude de página. A diferença entre ele e "window.location.href" é que com o location.replace o usuário não consegue voltar para a tela anterior usando o botão de voltar.
    } else if (nome !== usuario.nome) {
        alert("Nome de usuário incorreto.");
    } else {
        alert("Senha incorreta.");
    }
}

window.onload = function mostrarUsuario() { // "window.onload" faz a função funcionar após uma página ser carregada
    var mostrarNome = document.getElementById("nomeUsuario");
    var mostrarSenha = document.getElementById("senhaUsuario");
    mostrarNome.innerHTML = usuario.nome;
    mostrarSenha.innerHTML = usuario.senha;
}