// seleçao deelementos (capturando elementos do HTML para o JS)

const sessaoLogin = document.querySelector("#sessao-login"); //seçao de 
const painelControle = document.querySelector("#painel-controle");//Dashboard
const formulario = document.querySelector("#formulairio"); //form de login
const imagemProduto = document.querySelector("#foto-produto"); // a tag <img> do produto
const campoStatus = document.querySelector("#status-sistema"); // div para mensagens de feedback

// banco de dados local (simulado imagens para o slideshow)

const lsitaimagens = [
    "https//picsum.photos/id/1/500/350", //imagem 0
    "https//picsum.photos/id/2/500/350", //imagem 1
    "https//picsum.photos/id/3/500/350", //imagem 2
];


let ponteiroimagem = 0; //variavel que controla qual imagem esta ativa no momento 


// validaçao de formulario e login 
// adicionamos escutador de 'submit' no formmulario

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();// impede que a pagina recarregue ao clicar no botao !!!!!!!!!!!
})












































