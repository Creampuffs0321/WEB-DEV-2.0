


var addItemId = 0;
function addToCart (item) {
  addItemId += 1;
  var selectedItem = document.createElement ('div');
  selectedItem.classList.add('cartImg');
  selectedItem.setAttribute('id', addItemId);
  var img = document.createElement('img');
  img.setAttribute('src', item.children[0].currentSrc);
  var cartItems = document.getElementById('title');
  selectedItem.append(img);;
  cartItems.append(selectedItem);
}

let addButton=document.getElementsByClassName("button");
console.log(addButton)
for (let i = 0; i < addButton.length; i++) {
let button =addButton[i]
button.addEventListener('click', addToCartButton)
}
function addToCartButton(event){
  let button=event.target
  let items=button.parentElement
  let imagesrc=items.getElementsByClassName('phone-image')[0].src
  console.log(imagesrc);
  alert ("added to cart");
}
