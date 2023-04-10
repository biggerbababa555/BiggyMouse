const produ = [];
var am;
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
if(localStorage.getItem("product")!==null){
    const produc =JSON.parse(localStorage.getItem("product"));;
    var size = Object.keys(produc).length;
    let title = produc.map( (item) => item.title);
    let price = produc.map((item) => item.price);
    let img = produc.map( (item) => item.img);
    for (var i = 0; i < size; i++) {
        addProductToCart(title[i],price[i],img[i],1)
        updatetotal()
    }
}
//add
cartIcon.onclick = () =>{
    cart.style.display = "block";
}
//remove
closeCart.onclick = () =>{
    cart.style.display = "none";
}

//cart working JS
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}
//making Function
function ready(){
    //remove item from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    for(var i=0;i<removeCartButtons.length;i++){
        var button = removeCartButtons[i]
        button.addEventListener('click',removeCartItem)
    }
}
   //quantity change
   var quantityInputs = document.getElementsByClassName('cart-quantity')
   for(var i=0;i<quantityInputs.length;i++) {
    var input = quantityInputs[i];
    input.addEventListener('change',quantityChanged);
   }

//add to cart


var addCart = document.getElementsByClassName('add-cart')
for (var i = 0;i < addCart.length;i++){
    var button = addCart[i]
    button.addEventListener('click',addCartClicked)

}
document.getElementsByClassName('btn-buy')[0].addEventListener('click', purchaseClicked)


//remove item from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal()
}
function removeCart(index){
  produ.splice(index,1)
  updatetotal()
  updateStorage()
}
//quantityChanged
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;}
    updatetotal()
    am=input.value;
}
function purchaseClicked() {
    localStorage.clear();
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    document.getElementsByClassName("total-price")[0].innerText = "$"+0;
}
//add to cart
function addCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('product-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var productImg = shopItem.getElementsByClassName('product-img')[0].src
    addProductToCart(title, price, productImg,1)
    updatetotal()
    updateStorage()
}
function addProductToCart(title, price, productImg,amount) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    produ.push({title:title,price:price,img:productImg})
    var inde=0
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
        inde=cartItemsNames.length;
    }
    var cartBoxContent = ` <img src="${productImg}" alt="" class="cart-img" >
    <div class="detail-box">
    <div class="cart-product-title"> ${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" min = "0" value="${amount}" class="cart-quantity">
    </div>
    <i class='bx bxs-trash cart-remove' onclick="removeCart(${inde})" ></i>`;
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}
function updateStorage(){
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("product", JSON.stringify(produ));
  } 
  else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}
//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for(var i=0;i<cartBoxes.length;i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
    document.getElementsByClassName("total-price")[0].innerText = "$"+total.toFixed(2);
}

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") { // alternatively: if(modal.classList.contains("modal-show"))
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown - in this case: "initial" <=> "visible"
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}