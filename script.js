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



productDetails=[]
 var products = [cracker,cheese, double, flat, gluten, stuffed,thin, wrapping]
 let item ='';
 products.forEach(product =>{
    console.log(product)
    productDetails.push(product)
   
    


})


 //  creating prototype////////
PizzaCrust.prototype.size = ('small')
PizzaCrust.prototype.size = ('medium')
PizzaCrust.prototype.size = ('large')

let cart = []

// displaying the items
function Display(products){
    let result =''
     products.forEach(element => {
        console.log(element)
        
        
    });
}

    const buttons =[...document.querySelectorAll('.bag-btn')]
    console.log(buttons.id)
    
   for (var i =0; i<buttons.length; i++){
       var button = buttons[i]
       button.addEventListener('click',function(){
           console.log('clicked')
           
       })
   }
   var cost =0
var btn1 = document.getElementById('1').addEventListener('click',function(){
    
    var size = prompt('select the size you want: 1.small => ksh.1000   2.medium => ksh.1100 and 3.large => ksh.1300 ')
    if (size =='1'){
        cost =1000
    }else if(size=='2'){
        cost += 1100
    }else if(size=='3'){
        cost += 1300
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }
    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300) 1. Yes  2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)
    }else{alert("Total amount to be paid is Ksh." + cost)}
})

var btn2 = document.getElementById('2').addEventListener('click',function(){
    
    var size = prompt('select the size you want: 1.small => ksh.1200 2.medium => ksh.1300  and  3.large  => ksh.1400 ')
    if (size =='1'){
        cost +=1200
    }else if(size=='2'){
        cost += 1300
    }else if(size=='3'){
        cost += 1400
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }
    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300) 1. Yes 2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)
    }else{alert("Total amount to be paid is Ksh." + cost)}
})

var btn3 = document.getElementById('3').addEventListener('click',function(){
   
    var size = prompt('select the size you want: 1.small => ksh.1300  2.medium => ksh.1400 and 3.large => ksh.1500 ')
    if (size =='1'){
        cost =1300
    }else if(size=='2'){
        cost += 1400
    }else if(size=='3'){
        cost += 1500
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }
    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300)   1. Yes 2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)
    }else{alert("Total amount to be paid is Ksh." + cost)}
})

var btn4 = document.getElementById('4').addEventListener('click',function(){
    
    var size = prompt('select the size you want: 1.small => ksh.1100  2.medium => ksh.1200 and 3.large => ksh.1300 ')
    if (size =='1'){
        cost +=1100
    }else if(size=='2'){
        cost += 1100
    }else if(size=='3'){
        cost += 1300
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }
    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300) 1. Yes 2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)
    }
})

var btn5 = document.getElementById('5').addEventListener('click',function(){
   
    var size = prompt('select the size you want: 1.small => ksh.1300  2.medium => ksh.1400  and  3.large => ksh.1500 ')
    if (size =='1'){
        cost +=1300
    }else if(size=='2'){
        cost += 1400
    }else if(size=='3'){
        cost += 1500
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }
    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300) 1. Yes 2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)
    }else{alert("Total amount to be paid is Ksh." + cost)}
})

var btn6 = document.getElementById('6').addEventListener('click',function(){
   
    var size = prompt('select the size you want: 1.small => ksh.1600  2.medium => ksh.1700  and  3.large => ksh.1800 ')
    if (size =='1'){
        cost =1600
    }else if(size=='2'){
        cost += 1700
    }else if(size=='3'){
        cost += 1800
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }
    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300) 1. Yes 2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)
    }else{alert("Total amount to be paid is Ksh." + cost)}
})

var btn7 = document.getElementById('7').addEventListener('click',function(){
   
    var size = prompt('select the size you want: 1.small => ksh.1500  2.medium => ksh.1600  and  3.large => ksh.1700 ')
    if (size =='1'){
        cost +=1500
        }else if(size=='2'){
        cost += 1600
    }else if(size=='3'){
        cost += 1700
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }

    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300) 1. Yes 2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)
    }else{alert("Total amount to be paid is Ksh." + cost)}

})

var btn8 = document.getElementById('8').addEventListener('click',function(){
   
    var size = prompt('select the size you want:  1.small => ksh.1400   2.medium => ksh.1500 and   3.large => ksh.1600 ')
    if (size =='1'){
        cost =1400
    }else if(size=='2'){
        cost += 1500
    }else if(size=='3'){
        cost += 1600
    }else{alert('enter value between 1-3')}
    var topping = prompt('select the topping: 1: Pepperoni & mushroom => ksh 250  2. Sausage & Black olives => ksh. 300  3. Fresh garlic & Fresh basil =>ksh.350')
    if (topping =='1'){
        cost +=250
        alert("cost is now: " + cost)
    }else if(topping=='2'){
        cost += 300
        alert("cost is now: " + cost)
    }else if(topping=='3'){
        cost += 350
        alert("cost is now: " + cost)
    }else{alert('enter value between 1-3')}
    var quantity =parseInt( prompt('Please enter the quantity you want: '))
    if(quantity >=1){
        cost = cost * quantity
    }
   
    alert("total cost is: " + cost)
    var delivery = prompt('Would you want your quantity to be delivered to your location?  (Delivery charges is ksh.300) 1. Yes 2.No :')
    if (delivery==1){
        cost += 300
        alert("total amount to be paid is Ksh. " + cost)

    }else{alert("Total amount to be paid is Ksh." + cost)}
})






