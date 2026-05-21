// Seleção de elementos (Capturando elementos do HTML para o JS)
const sessaoLogin = document.querySelector("#sessao-login");//Seção de login inteira
const painelControle = document.querySelector("#painel-controle");//Dashboard
const formulario = document.querySelector("#formulario-login");//Form de login
const imagemProduto = document.querySelector("#foto-produto");//A tag <img> do produto
const campoStatus = document.querySelector("#status-sistema");//Div para mensagens de feedback

// Banco de Dados Local (Simulado imagens para o Slideshow)
const listaImagens = [
    "https://picsum.photos/id/1/500/350", //Imagem 0
    "https://picsum.photos/id/2/500/350", //Imagem 1
    "https://picsum.photos/id/3/500/350", //Imagem 2
];

let ponteiroImagem = 0; //Variável que controla qual imagem está ativa no momento

//Validação de formulário e login
//Adicionamos um escutador de ´submit´ no formulário
formulario.addEventListener("submit",function(evento){
    evento.preventDefault(); //Impede que a página recarregue ao clicar no botão 
const user = document.querySelector("#usuario").value;
const pass = document.querySelector("#senha").value;
    
    //verificação simples de credenciais
if(user=="admin" && pass =="123"){
    alert("Login efetuado com sucesso!");//uso do alerta requisito
    sessaoLogin.classList.add("oculto");//esconde o login
    painelControle.classList.remove("oculto");//mostra o dashboard
}else{
    alert("Dados incorretos. Tente admin / 123")//alerta de erro
}
});

//manipulçao de imagens 
//função para o botao PROXIMO
document.querySelector("#proximo").addEventListener("click", () => {
    ponteiroImagem++;//incremento de índice
    //se o indice chegar no fim da lista, volta pra zero
    if(ponteiroImagem >=listaImagens.length){
        ponteiroImagem = 0;
    }
    //altera o atributo "src" da imagem dinamicamente através do DOM
    imagemProduto.src = listaImagens[ponteiroImagem];
});

//função para o botao anterior
document.querySelector("#anterior").addEventListener("click", () => {
    ponteiroImagem--;//incremento de índice
    //se o indice for menor que zero vai para a ultima imagem da lista
    if(ponteiroImagem < 0){
        ponteiroImagem = listaImagens.length -1;
    }
    //altera o atributo "src" da imagem dinamicamente através do DOM
    imagemProduto.src = listaImagens[ponteiroImagem];
});

//prompts e gerenciamento de eventos do usuario
//evento para o botao de informações
document.querySelector("#btn-info").addEventListener("click", ()=>{
    //uso do prompt para capturar entrada do usuario(requisito)
    const nomeInteressado = prompt("Para que você deseja gerar o relatório");
    if(nomeInteressado){
        //manipulando o texto de um elemento via DOM baseado no prompt
        campoStatus.innerHTML = `<p style = "color: blue">Relatório gerado para: <strong>${nomeInteressado}</strong></p>`;
    }
});

//evento para p botao de estoque 
document.querySelector("#btn-estoque").addEventListener("click", () => {
    //altere o conteúdo de uma div e sua solicitação via js
    campoStatus.innerHTML = `<p style: "color:orange">Verificando o banco de dados...</p>`;
    //simula um delay de resposta com o setTimeout
    setTimeout(() => {
        campoStatus.innerHTML = `<p style="color: red">Atenção: Apenas 2 unidades no estoque!</p>`;
    },1500);
});

//evento de logout (Sair)
document.querySelector("#btn-sair").addEventListener("click", () =>{
    //uso de confirm (alerta de confirmação)
    const confirmaSair = confirm("deseja realmente encerrar a sessão?");
    if(confirmaSair){
        location.reload();//recarrega a pagina voltando para o estado inicial (login)
    }
});