const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const nomeInput = document.getElementById('nome');
const usuarioInput = document.getElementById('usuario');
const cadastroButton = document.getElementById('cadastro');

cadastroButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    
    if (
        !emailInput.value.trim() ||
        !senhaInput.value.trim() ||
        !nomeInput.value.trim() ||
        !usuarioInput.value.trim()
    ) {
        alert('Por favor, preencha todos os campos antes de prosseguir.');
        return;
    }

    
    window.location.href = 'boasvindas.html';
});