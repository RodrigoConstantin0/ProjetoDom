//aplicando o tema dark-mode
function TemaSalvo() {
return localStorage.getItem('tema') || 'modo-claro';
}  
function applyTheme(tema) {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-dark-mode');
    const cardapioGeral = document.getElementById('cardapio-container');
  
    body.className = tema;
    cardapioGeral.className = tema;
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
  themeButton.addEventListener('click', toggleDarkMode); 


// botão de + e - no div cardapio-container
function decrement(id) {
    let value = parseInt(document.getElementById(id).innerText);
    if (value > 0) {
        document.getElementById(id).innerText = value - 1;
    }
}
function increment(id) {
    document.getElementById(id).innerText = parseInt(document.getElementById(id).innerText) + 1;
}
function crescente(id) {
    const button = document.getElementById(`increment-${id}`);
    button.click();
}
function decrecente(id) {
    const button = document.getElementById(`decrement-${id}`);
    button.click();
}


// calculo para x pessoas que iram comer
function calcularChurrasco() {
   const quantidadeHomens = parseInt(document.getElementById('quantidadeHomens').innerText);
   const quantidadeMulheres = parseInt(document.getElementById('quantidadeMulheres').innerText); 
   const quantidadeCrianças = parseInt(document.getElementById('quantidadeCrianças').innerText);
   const quantidadeAdultosQueBebem = parseInt(document.getElementById('quantidadeAdultosQueBebem').innerText);

   const totalConvidados = quantidadeHomens + quantidadeMulheres + quantidadeCrianças;
   const resultadoInfo = {
       totalConvidados: totalConvidados,
       quantidadeHomens: quantidadeHomens,
       quantidadeMulheres: quantidadeMulheres,
       quantidadeCrianças: quantidadeCrianças,
       quantidadeAdultosQueBebem: quantidadeAdultosQueBebem
   };
   resultadoInfo.carne = 0.4 * quantidadeHomens + 0.32 * quantidadeMulheres + 0.20 * quantidadeCrianças;
   resultadoInfo.paoDeAlho = 2 * quantidadeAdultosQueBebem + quantidadeCrianças;
   resultadoInfo.carvao = totalConvidados;
   resultadoInfo.sal = 0.04 * totalConvidados;
   resultadoInfo.gelo = Math.ceil(totalConvidados / 10) * 5;
   resultadoInfo.refrigerante = Math.ceil(totalConvidados / 5);
   resultadoInfo.agua = Math.ceil(totalConvidados / 5);
   resultadoInfo.cerveja = 3 * quantidadeAdultosQueBebem;

   const resultadoInfoString = JSON.stringify(resultadoInfo);
   
   localStorage.setItem('resultadoInfo', resultadoInfoString);
   window.location.href = 'resultado.html'
};