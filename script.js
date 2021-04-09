let contador = 0;
let qtdCartas = 0;
let listaCartas=[];
let listaCartasEmbaralhadas=[];

function adicionarCartas() {
    const elemento = document.querySelector("ul");
    while(contador<qtdCartas){
        if(listaCartasEmbaralhadas[contador]=="carta1"){
            elemento.innerHTML = elemento.innerHTML + "<li onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/metalparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta2"){
            elemento.innerHTML = elemento.innerHTML + "<li onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/fiestaparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta3"){
            elemento.innerHTML = elemento.innerHTML + "<li onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/explodyparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta4"){
            elemento.innerHTML = elemento.innerHTML + "<li onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/bobrossparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta5"){
            elemento.innerHTML = elemento.innerHTML + "<li onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/revertitparrot.gif'></li>";
        }else if(listaCartasEmbaralhadas[contador]=="carta6"){
            elemento.innerHTML = elemento.innerHTML + "<li onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/tripletsparrot.gif'></li>";
        }else{
            elemento.innerHTML = elemento.innerHTML + "<li onclick='virarCarta(this)'class="+listaCartasEmbaralhadas[contador]+"><img class ='verso'src='imagens/front.png'><img class ='frente'src='imagens/unicornparrot.gif'></li>";
        }
        contador++;
    }
    contador = 0;   
}

montarJogo();

function montarJogo(){
    montarArray();
    atribuirCartasNoArray();
    embaralharCartas();
    alert(listaCartasEmbaralhadas);
    adicionarCartas();
}
function atribuirImagens(){
    const itensLista = document.querySelectorAll("li");
    const itensListaArr = Array.from(itensLista);
    alert(itensListaArr);
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
    itemLista.classList.add("virada");
}

//<img class="verso" src="imagens/aojiru.jpg" alt=""> <img class="frente" src="imagens/arroz.jpg" alt="">

