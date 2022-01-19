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
function PizzaCrust(name, price, id, img){
    this.name =name;
    this.price = price;
    
    this.id = id
    this.img = img
}

const cracker = new PizzaCrust('Cracker',1000,'1','images/Cracker-Pizza.jpg' )
const cheese = new PizzaCrust('cheese',2000,'2','images/cheese-crust.jpg')
const double = new PizzaCrust('Double crust',3000, '3', 'images/double-crust.jpg')
const flat = new PizzaCrust('Flat bed', 4000, '4','images/flat-bread.jpg')
const gluten = new PizzaCrust('Gluten free',5000,'5','images/gluten-free-pizza-crust.jpg')
const stuffed = new PizzaCrust('Stuffed',6000, '6', 'images/stuffed pizza crust.jpg')
const thin =new PizzaCrust('Thin & cripsy', 7000, '7', 'images/Thin & crispy pizza crust.jpg')
const wrapping = new PizzaCrust('Wrapping', 8000, '8', 'images/wrapping-pizza-crust.jpeg')


function Topping(name, cost, id){
    this.name = name;
    this.cost = cost;
    this.id = id
}
//  creating prototype
PizzaCrust.prototype.size = ()

let cart = []

// displaying the items
function Display{
    
}

// eventLISTER

document.addEventListener("DOMContentLoaded",()=> {
    const display = new Display();
})




