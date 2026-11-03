const formulario = document.getElementById("login");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    mensagem.textContent = "Formulário recebido.";
});