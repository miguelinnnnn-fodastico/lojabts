// 1. Selecionamos o formulário e o campo de texto pelo ID
const formNewsletter = document.getElementById('form-newsletter');
const emailInput = document.getElementById('email-input');
// 2. Criamos um "ouvinte" para o evento de envio (submit)
formNewsletter.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede a página de recarregar
    const email = emailInput.value; // Pega o que o usuário digitou

    // 3. Exibe a mensagem de sucesso e limpa o campo
    alert(`Obrigado por se inscrever, army!\nNovidades serão enviadas para: ${email}`);
    emailInput.value = "";
});