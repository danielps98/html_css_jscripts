function validar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let mensagem = "";

    if (nome === "") {
        mensagem = "O nome não pode ficar vazio!";
        document.getElementById("msg").textContent = mensagem;
        return false;
    }

    if (isNaN(idade) || idade === "") {
        mensagem = "A idade deve ser um número!";
        document.getElementById("msg").textContent = mensagem;
        return false;
    }

    mensagem = "Dados válidos!";
    document.getElementById("msg").textContent = mensagem;
    return false; // só pra não enviar de verdade
}
