document.getElementById('showTemas').addEventListener("click", function() {
    document.querySelector(".temas").classList.toggle("open");
});

function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'curriculo.pdf'; 
    link.download = 'curriculo.pdf';  
    link.click();  
}

function abrirModal(){
    const modal = document.getElementById('modal')
    modal.style.display = 'flex'
}

function fecharModal(){
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
}

function changeToOrange(){
    const nome = document.getElementById('nome');
    const copy = document.getElementById('copy');
    const marketing = document.getElementById('marketing');
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    nome.style.color = "#fff";
    copy.style.color = "#ccc";
    marketing.style.color = "#fff";
    document.body.style.backgroundImage = 'linear-gradient(to right, red, rgb(255, 123, 0))';
}

function changeToBlue(){
    const nome = document.getElementById('nome');
    const copy = document.getElementById('copy');
    const marketing = document.getElementById('marketing');
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    nome.style.color = "#fff";
    copy.style.color = "#ccc";
    marketing.style.color = "#fff";
    document.body.style.backgroundImage = 'linear-gradient(to right, rgb(0, 49, 211), rgb(3, 210, 247))';
}

function changeToGreen(){
    const nome = document.getElementById('nome');
    const copy = document.getElementById('copy');
    const marketing = document.getElementById('marketing');
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    nome.style.color = "#fff";
    copy.style.color = "#fff";
    marketing.style.color = "#000";
    document.body.style.backgroundImage = 'linear-gradient(to right, green, lightgreen)';
}

function changeToBlack(){
    const nome = document.getElementById('nome');
    const copy = document.getElementById('copy');
    const marketing = document.getElementById('marketing');
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#ccc";
    }
    nome.style.color = "#fff";
    copy.style.color = "#ccc";
    marketing.style.color = "#fff";
    document.body.style.background = "#333";
}

function changeToGray(){
    const nome = document.getElementById('nome');
    const copy = document.getElementById('copy');
    const marketing = document.getElementById('marketing');
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    nome.style.color = "#333";
    copy.style.color = "#333";
    marketing.style.color = "purple";
    document.body.style.backgroundImage = 'linear-gradient(to right, gray, white)';
}

const anoAtual = new Date().getFullYear();
        document.getElementById('ano').textContent =  anoAtual;