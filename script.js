
$(document).ready(function(){

    
    $('#priceDisplay').click(function(){
        alert('you clicked me')
        document.getElementById(this).innerText='hero'
    })    
    var elementNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
    elementNumbers.forEach(function(element) {
        $("#content"+ element).hover(function() {
            $(this).css('opacity','0.7')
            $('#price' + element).css('color','red')
            $("#pizza" + element).show();},

         

            
         
         function() {
            $("#pizza" + element).hide()
            $('#price' + element).css('color','white')
            $(this).css('opacity','1')
          
         })

        
     
    });

    elementNumbers.forEach(function(element) {
        $("#order"+ element).hover(function() {
            $(this).css("font-weight","bolder")
            $(this).css("font-size","larger")
            $(this).css("color","violet");},
                     
         function() {
            $(this).css('color','blue')
            $(this).css("font-weight","bold")
            $(this).css("font-size","medium")

            
         })

        
     
    });
    var price =''
    elementNumbers.forEach(function(element) {
        $("#order"+ element).click(function() {
            price= $(this).val()
            alert(price)
            get(price)
        });
       

        
     
    });
    

    


})



function Pizza(crust,size,price){
    this.crust = crust;
    this.size = size;
    this.price =price
}
function receiveSize(){
    var smallSelect = document.getElementById("small");
    var mediumSelect = document.getElementById('medium');
    var largeSelect = document.getElementById('large');

    var size ='' 

    if(smallSelect.checked == true){
        size = 'Small'
    }
    else if(mediumSelect.checked == true){
        size = 'Medium'
    }
    else if(largeSelect.checked == true){
        size ='Large'
    }
    

    alert(size)

    return size
} 
function receiveTopping(){
    var checkedItems =[] 
    
    var sausage = document.getElementById("Selection2");
    var Pepperoni = document.getElementById('Selection1');
    
    var onion = document.getElementById('Selection3');
    var Mushroom = document.getElementById('Selection4');
    var BlackOlives = document.getElementById('Selection5');
    var GreenPepper = document.getElementById('Selection6');
    if(sausage.checked == true){
        var s = document.getElementById("Selection2").value;
        
        alert(s)
        checkedItems.push(s)
    }
    if(Pepperoni.checked == true){
        var p = document.getElementById("Selection1").value;
        
        alert(p)
        checkedItems.push(p)
    }
    if(onion.checked == true){
        var o = document.getElementById("Selection3").value;
        
        alert(o)
        checkedItems.push(o)
    }
    if(Mushroom.checked == true){
        var m = document.getElementById("Selection4").value;
        
        alert(m)
        checkedItems.push(m)

    }
    if(BlackOlives.checked == true){
        var b = document.getElementById("Selection5").value;
        
        alert(b)
        checkedItems.push(b)
    }
    if(GreenPepper.checked == true){
        var g = document.getElementById("Selection6").value;
        
        alert(g)
        checkedItems.push(g)
    }
    alert(checkedItems)

   return checkedItems
}
alert("price: " + price +'; size:' + size + "  Topping: " + checkedItems )