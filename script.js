

$(document).ready(function(){

    
    $('#priceDisplay').click(function(){
        alert('you clicked me')
        document.getElementById(this).innerText='hero'
    })    
    var elementNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
  
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
       

            
         })

        
     
    });
    


 
    

    function Pizza(crust,size,price){
        this.crust = crust;
        this.size = size;
        this.price =price
    }

    // var crust = document.getElementById
})

  alert('outside '+price.val())

  function get(price){
      alert('thi is price '+price)
      alert(typeof(price))
      let price2= parseInt(price)
      alert(typeof(price2))


        }
        function myFunction() {
           
              document.getElementById("demo").innerHTML = 'i am here';
            }

//   function myFunction() {
//       alert(price2)
//       if(price2<=1000){
//         document.getElementById("demo").innerHTML = "Cost is 1000";
//       }
//       else if(price2<=1100){
//         document.getElementById("demo").innerHTML = "cost is 1100";
//       }
//       else{
//         document.getElementById("demo").innerHTML = "non of the above";
//       }

    
//   }
