// accessing the DOM items
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn =document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverly = document.querySelector(".cart-overlay");
const cartItem = document.querySelector(".carrt-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".product-center");

// creating the constructors pizzaCrust % Topping
function PizzaCrust(name, price, quantity, id){
    this.name =name;
    this.price = price;
    this.quantity = quantity
    this.id = id
}
function Topping(name, cost, id){
    this.name = name;
    this.cost = cost;
    this.id = id
}
//  creating prototype
PizzaCrust.prototype.size = ()



