$(document).ready(function(){
   
    var elementNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
    elementNumbers.forEach(function(element) {
        $("#content"+ element).click(function() {
            $(this).css('opacity','0.7') 
            
            $('#pizza' + element ).show()
            
        })

    
            
        

        $('#project' + element).click(function(){
            $('#project' + element ).css('display','none')
            $('#content' + element).css('opacity', '1')
            
      
          });
    })

})