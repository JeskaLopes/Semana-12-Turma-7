let listas = ['pera','uva','tomate','caqui','morango','banana'];
let listUl = document.querySelector('ul');
//let texto = document.querySelector('#text').value;
let botao = document.querySelector('button');


//element serve para printar os itens do array por conta do for of.
for (element of listas){
    let listLi = document.createElement('li');
    let textElement = document.createTextNode(element);
    listUl.appendChild(listLi);
    listLi.appendChild(textElement); 
};

botao.addEventListener("click", function(){
    let texto = document.querySelector('#text').value;
    let listaLi = document.createElement('li');
    let textoInput = document.createTextNode(texto);
    //primeiro a mãe, depois o filho.
    listUl.appendChild(listaLi);
    listaLi.appendChild(textoInput);
});
