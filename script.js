$(document).ready(function(){
    var elementNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
  
    elementNumbers.forEach(function(element) {
        $("#content"+ element).hover(function() {
            $(this).css('opacity','0.7')
            $("#pizza" + element).show();},

         

            
         
         function() {
            $("#pizza" + element).hide()
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
            $(this).css("font-size","large")

            
         })

        
     
    });

    

    function Pizza(crust,size,price){
        this.crust = crust;
        this.size = size;
        this.price =price
    }

    var crust = document.getElementById
})
   