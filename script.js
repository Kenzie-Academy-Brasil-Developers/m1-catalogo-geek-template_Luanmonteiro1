const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "/assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },
  {
    image: "/assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings",
  },
  {
    image: "/assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings",
  },
  {
    image: "/assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },
  {
    image:"/assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },
  {
    image:"/assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },
  {
    image:"/assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },
  {
    image:"/assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },
  {
    image:"/assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
  
];
let actionFiguresArray = []
let paintingsArray = []
function separateItens(productsArray){
  for( let i = 0; i < productsArray.length; i++){
    if(productsArray[i].type == 'Action Figures' ){
      actionFiguresArray.push(productsArray[i])
    }else if(productsArray[i].type == 'Paintings'){
      paintingsArray.push(productsArray[i])
    }
  }
}
separateItens(productsArray)
let pinturas = document.querySelector('.pinturas')
let figures = document.querySelector('.actions')

function products(listArray,ul){
  console.log(listArray)
    for(let i = 0; i < listArray.length; i++){
    let products = listArray[i]
    let li = document.createElement('li');
    let img = document.createElement('img')
    let p = document.createElement('p')
    let preco = document.createElement('h5')
    img.src = products.image
    p.innerText = products.name
    preco.innerText = products.price
    li.className = 'card'
    p.className = 'nome-produto'
    preco.className = 'preco-produto'
    li.append(img,p,preco)
    ul.appendChild(li)
  }
}
products(actionFiguresArray,figures)
products(paintingsArray,pinturas)





