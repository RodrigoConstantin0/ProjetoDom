function TemaSalvo() {
    return localStorage.getItem('tema') || 'modo-claro';
}
function applyTheme(tema) {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-dark-mode');
    const cadastroForm = document.getElementById('cadastro-form');

    body.className = tema;
    cadastroForm.className = tema;
    toggleButton.textContent = tema === 'dark-mode' ? 'Modo Claro' : 'Modo Escuro';
}

function toggleDarkMode() {
    const temaAtual = document.body.classList.contains('dark-mode') ? 'modo-claro' : 'dark-mode';
    localStorage.setItem('tema', temaAtual);
    applyTheme(temaAtual);
}

// Função para salvar as informações do cadastro no localStorage
function salvarCadastro(nome, email, cep) {
    const cadastro = {
        nome: nome,
        email: email,
        cep: cep
    };
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
}
function exibirAlerta() {
    alert('Parabéns! Cadastro efetuado com sucesso!');
}
document.getElementById('cadastro-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('CEP').value;
    
    salvarCadastro(nome, email, cep);
  
    exibirAlerta();
});
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = TemaSalvo();
    applyTheme(savedTheme);
});

const themeButton = document.getElementById('toggle-dark-mode');
themeButton.addEventListener('click', toggleDarkMode);