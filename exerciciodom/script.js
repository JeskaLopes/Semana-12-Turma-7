let listas = ['pera','uva','tomate','caqui']
let listUl = document.querySelector('ul');


for (element of listas){
    let listLi = document.createElement('li');
    let textElement = document.createTextNode(element);
    listUl.appendChild(listLi)
    listLi.appendChild(textElement);
}