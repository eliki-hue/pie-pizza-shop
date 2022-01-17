
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
    // var price =''
    // elementNumbers.forEach(function(element) {
    //     $("#order"+ element).click(function() {
    //         price= $(this).val()
    //         alert(price)
    //         get(price)
    //     }
    //     $()
       

            
    //      })

        
     
    // });
    

    // $("button").click(function(){
    //      var topping = [];
    //     $.each($("input[name='selection']").change(function(){
    //         var checkedItems = $(this).val();
    //         alert(checkedItems)
    //         if($(this).is(':checked')){
    //             topping.push(checkedItems);
    //         }
            
    //     }));
    //     $('#submit-order').on('click', function(){
    //         console.log(topping)
    //     })
        
    // });
    


})
function receive(){
var checkedItems =[] 

var Pepperoni = document.getElementById('selection1').checked;
var Sausage = document.getElementById('selection2').checked;
var onion = document.getElementById('selection3').checked;
var Mushroom = document.getElementById('selection4').checked;
var BlackOlives = document.getElementById('selection5').checked;
var GreenPepper = document.getElementById('selection6').checked;

alert(Pepperoni)
alert(Sausage)
alert(onion)

}


function Pizza(crust,size,price){
    this.crust = crust;
    this.size = size;
    this.price =price
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
}