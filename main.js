
//listas
var listaItens = [];
var listaFrutas = [], listaLaticinios = [];
var listaCongelados = [], listaDoces = [];


//elementos
var radioButtons = document.getElementsByName('setor');

var lblEscolhaSetor = document.getElementById('lblTeste');
var novoItem;

var txtAddItemitem = document.getElementById('txtAddItem');


var btnAddItem = document.getElementById('btnAddItem');
var btnAddSetor = document.getElementById('btnAddSetor');


var divMain = document.querySelector('.container');
var divSetores = document.querySelector('.setores');


//funções

function adicionarItem() {

    novoItem = txtAddItemitem.value;
    alert(novoItem);

    listaItens.push(novoItem);

    lblEscolhaSetor.innerHTML = listaItens.join('<br>');

    //limpa text
    document.getElementById('txtAddItem').value = '';

    console.log(listaItens);

    mostraSetor();    

}

function adicionarSetor() {

    var frutas = document.getElementById('rdbFrutas');

    if(frutas.checked == true){
        console.log('frutas foi');

        listaFrutas.push(novoItem);

        console.log(listaFrutas);

    }
    
    var laticinios = document.getElementById('rdbLaticinios');

    if(laticinios.checked == true){
        console.log('laticinios foi');

        listaLaticinios.push(novoItem);

        console.log(listaLaticinios);

    }

    var congelados = document.getElementById('rdbCongelados');

    if(congelados.checked == true){
        console.log('congelados foi');

        listaCongelados.push(novoItem);

        console.log(listaCongelados);

    }

    var doces = document.getElementById('rdbDoces');

    if(doces.checked == true){
        console.log('doces foi');

        listaDoces.push(novoItem);

        console.log(listaDoces);

    }

} 


btnAddSetor.addEventListener('click', function () {

    adicionarSetor();

    mostraMain();

})
 
/*
function exibirEscolha() {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            lblEscolhaSetor.textContent = 'Você escolheu: ' + radioButton.value;
            break;
        }
    }
}

for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', exibirEscolha);
}
*/


function mostraSetor() {

    divSetores.style.pointerEvents = 'auto';
    divSetores.style.opacity = '1.0';

    divMain.style.pointerEvents = 'none';
    divMain.style.backgroundColor = '';
    divMain.style.opacity = '0.5';

    btnAddSetor.style.opacity = '1.0';
    btnAddSetor.style.pointerEvents = 'auto';

}

function mostraMain() {

    divMain.style.pointerEvents = 'auto';
    divMain.style.opacity = '1.0';

    divSetores.style.pointerEvents = 'none';
    divSetores.style.opacity = '0';

    btnAddSetor.style.opacity = '0';
    btnAddSetor.style.pointerEvents = 'none';

}
