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
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    document.body.style.backgroundImage = 'linear-gradient(to right, red, orange)';
}

function changeToBlue(){
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    document.body.style.backgroundImage = 'linear-gradient(to right, rgb(0, 49, 211), rgb(3, 210, 247))';
}

function changeToGreen(){
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#fff";
    }
    document.body.style.backgroundImage = 'linear-gradient(to right, green, lightgreen)';
}

function changeToBlack(){
    const rede = document.getElementsByClassName('rede');
    for (let i=0; i < rede.length; i++){
        rede[i].style.background = "#ccc";
    }
    document.body.style.background = "#333";
}

const anoAtual = new Date().getFullYear();
        document.getElementById('ano').textContent =  anoAtual;