let contador = 0;
let contadorCartasEmJogo = 0;
let qtdCartas = 0;
let listaCartas=[];
let listaCartasEmbaralhadas=[];
let arrayTemporario=[];
let contadorSucessos=0;
let contadorFalhas=0;

function adicionarCartas() {
    const elemento = document.querySelector("ul");
    while(contador<qtdCartas){
        if(listaCartasEmbaralhadas[contador]=="carta1"){
            elemento.innerHTML = elemento.innerHTML + "<li data-framework='carta1'onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/metalparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta2"){
            elemento.innerHTML = elemento.innerHTML + "<li data-framework='carta2'onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/fiestaparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta3"){
            elemento.innerHTML = elemento.innerHTML + "<li data-framework='carta3'onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/explodyparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta4"){
            elemento.innerHTML = elemento.innerHTML + "<li data-framework='carta4'onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/bobrossparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta5"){
            elemento.innerHTML = elemento.innerHTML + "<li data-framework='carta5'onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/revertitparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta6"){
            elemento.innerHTML = elemento.innerHTML + "<li data-framework='carta6'onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/tripletsparrot.gif'></li>";
        }else{
            elemento.innerHTML = elemento.innerHTML + "<li data-framework='carta7'onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/unicornparrot.gif'></li>";
        }
        contador++;
    }
    contador = 0;   
}

montarJogo();

function mostrarContador(){
    alert(contador);
}

function montarJogo(){
    montarArray();
    atribuirCartasNoArray();
    embaralharCartas();
    adicionarCartas();
}

function perguntarCartas(){
    qtdCartas = prompt("Com quantas cartas vc quer jogar?");
    while(qtdCartas%2!=0 || qtdCartas<4 || qtdCartas>14){
        perguntarCartas();
    }
}
function montarArray(){
    perguntarCartas();
    while(contador < qtdCartas){
        listaCartas.push("placeholder");
        contador++;
        }    
    contador=0;
}
function atribuirCartasNoArray(){
    while(contador<listaCartas.length){
        if(contador<2){
            listaCartas[contador] = "carta1"; 
        }else if(contador<4){
            listaCartas[contador] = "carta2"; 
        }else if(contador<6){
            listaCartas[contador] = "carta3"; 
        }else if(contador<8){
            listaCartas[contador] = "carta4"; 
        }else if(contador<10){
            listaCartas[contador] = "carta5"; 
        }else if(contador<12){
            listaCartas[contador] = "carta6"; 
        }else{
            listaCartas[contador] = "carta7"; 
        }
        contador++;
    }
    contador = 0;
}

function embaralharCartas(){
    listaCartasEmbaralhadas = listaCartas.sort(comparador);
}
function comparador() { 
	return Math.random() - 0.5; 
}
function virarCarta(elemento){
    const itemLista = elemento;
    const x = itemLista.dataset.framework;
    arrayTemporario.push(x);
    contadorCartasEmJogo ++;
    if(contadorCartasEmJogo===1){
        itemLista.classList.add("viradaEmJogo"); 
    }
    else if(contadorCartasEmJogo===2){
        itemLista.classList.add("virada");
        if(arrayTemporario[0]===arrayTemporario[1]){ // e x===true
            setTimeout(match,1000);
            // adicionar classe para deixar nao clickavel
        }else{
            setTimeout(naoMatch,1000, itemLista);
            // desfazer classes
        }
    }
}
function match(){
    const primeiraCarta = document.querySelector(".viradaEmJogo");
            primeiraCarta.classList.add("virada");
            primeiraCarta.classList.remove("viradaEmJogo");
            contadorCartasEmJogo = 0;
            contadorSucessos++;
            arrayTemporario=[];
            verificadorEndgame();
}
function naoMatch(itemLista){
    const   primeiraCarta = document.querySelector(".viradaEmJogo");
            primeiraCarta.classList.remove("viradaEmJogo");
            itemLista.classList.remove("virada");
            contadorCartasEmJogo = 0;
            contadorFalhas++;
            arrayTemporario=[];
            verificadorEndgame();
}

function verificadorEndgame(){
    if(contadorSucessos==(qtdCartas/2)){
        alert("Parabéns, você terminou o jogo em "+Number(contadorFalhas+contadorSucessos)+" tentativas!");
    }
}


    //const x = itemLista.dataset.framework;

