// resultado.js
document.addEventListener('DOMContentLoaded', function() {
    const resultadoInfoString = localStorage.getItem('resultadoInfo');
    
    if (resultadoInfoString){
        const resultadoInfo = JSON.parse(resultadoInfoString);
        
        document.getElementById('carne').innerText = `${resultadoInfo.carne.toFixed(2)} KG`;
        document.getElementById('paoDeAlho').innerText = resultadoInfo.paoDeAlho;
        document.getElementById('carvao').innerText = `${resultadoInfo.carvao} KG`;
        document.getElementById('sal').innerText = `${resultadoInfo.sal} KG`;
        document.getElementById('gelo').innerText = `${resultadoInfo.gelo} KG`;
        document.getElementById('refrigerante').innerText = resultadoInfo.refrigerante;
        document.getElementById('agua').innerText = resultadoInfo.agua;
        document.getElementById('cerveja').innerText = resultadoInfo.cerveja;
        document.getElementById('span').innerText = `${resultadoInfo.totalConvidados}`;
    }
});
//Funcão para alterar o tema da pagina e salvar o tema no localStorage
function TemaSalvo() {
    return localStorage.getItem('tema') || 'modo-claro';
}  
function applyTheme(tema) {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-dark-mode');  
    const listaContainer = document.getElementById('lista-container');
    body.className = tema;  
    listaContainer.className = tema;  
    toggleButton.textContent = tema === 'dark-mode' ? 'Modo Claro' : 'Modo Escuro';
}  
function toggleDarkMode() {
    const temaAtual = document.body.classList.contains('dark-mode') ? 'modo-claro' : 'dark-mode';
    localStorage.setItem('tema', temaAtual);
    applyTheme(temaAtual);
}  
  document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = TemaSalvo();
    applyTheme(savedTheme);
});  
const themeButton = document.getElementById('toggle-dark-mode');
  themeButton.addEventListener('click', toggleDarkMode)
