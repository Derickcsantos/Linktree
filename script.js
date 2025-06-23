const nome = document.getElementById('nome');
const copy = document.getElementById('copy');
const pincel = document.getElementById('mostrarTemas');
const marketing = document.getElementById('marketing');
const rede = document.getElementsByClassName('rede');

document.getElementById('mostrarTemas').addEventListener("click", function(event) {
    event.stopPropagation(); // Impede o clique de propagar para o document
    document.querySelector(".temas").classList.toggle("open");
});

document.addEventListener("click", function() {
    document.querySelector(".temas").classList.remove("open");
});

// Impede que o clique no menu de temas feche a gaveta
document.querySelector(".temas").addEventListener("click", function(event) {
    event.stopPropagation();
});

function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'Currículo - Dérick Campos Santos.pdf'; 
    link.download = 'curriculo.pdf';  
    link.click();  
}

function copiarLink() {
    const link = "https://derickcs-linktree.vercel.app";
    navigator.clipboard.writeText(link).then(function() {
        console.log = "Link copiado!";
    }).catch(function(err) {
        console.error("Erro ao copiar o link: ", err);
    });
}

function abrirModal(){
    const modal = document.getElementById('modal')
    modal.style.display = 'flex'
}

function fecharModal(){
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
}

function mudarParaLaranja(){
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    pincel.style.color = "#fff";
    nome.style.color = "#fff";
    copy.style.color = "#fff";
    marketing.style.color = "#fff";
    document.body.style.backgroundImage = 'linear-gradient(to right, red, rgb(255, 123, 0))';
}

function mudarParaAzul(){
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    pincel.style.color = "#fff";
    nome.style.color = "#fff";
    copy.style.color = "#fff";
    marketing.style.color = "#fff";
    document.body.style.backgroundImage = 'linear-gradient(to right, rgb(0, 49, 211), rgb(3, 210, 247))';
}

function mudarParaVerde(){
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    pincel.style.color = "#fff";
    nome.style.color = "#fff";
    copy.style.color = "#fff";
    marketing.style.color = "#000";
    document.body.style.backgroundImage = 'linear-gradient(to right, green, lightgreen)';
}

function mudarParaPreto(){
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#ccc";
    }
    pincel.style.color = "#fff";
    nome.style.color = "#fff";
    copy.style.color = "#ccc";
    marketing.style.color = "#fff";
    document.body.style.background = "#333";
}

function mudarParaCinza(){
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    pincel.style.color = "#000";
    nome.style.color = "#333";
    copy.style.color = "#333";
    marketing.style.color = "purple";
    document.body.style.backgroundImage = 'linear-gradient(to right, gray, white)';
}

const anoAtual = new Date().getFullYear();
        document.getElementById('ano').textContent =  anoAtual;