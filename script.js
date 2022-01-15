$(document).ready(function(){
    var elementNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
  
    elementNumbers.forEach(function(element) {
        $("#content"+ element).hover(function() {
          $("#pizza" + element).show();},

         

            
         
         function() {
            $("#pizza" + element).hide()
          
         })

        $('#hidden' + element).click(function(){
            $(this).hide()
            $('#whatWeDo' + element)
      
        })
    });
})
    // var elementNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
  
    //   elementNumbers.forEach(function(element) {
    //       $("#content"+ element).hover(function() {
    //         //   $(this).hide()
    //           $('#project' + element ).show()
              
    //       })
  
    //       $('#hidden' + element).click(function(){
    //           $(this).hide()
    //           $('#whatWeDo' + element)
        
    //         });
    //   })
    // })
    //   elementNumbers.forEach(function(element) {
    //     $("#content"+ element).click(function() {
    //         $(this).css('opacity','0')
    //         alert("you clicked me"+ element)
            
    //         $('#project' + element ).show()
            
    //     })

    
            
        

    //     $('#project' + element).click(function(){
    //         $('#project' + element ).css('display','none')
    //         $('#content' + element).css('opacity', '1')
            
      
    //       });
    // })

    

    // document.getElementById("formMessage").addEventListener("submit", validateInputHere)
    // function validateInputHere (){
            
    //     var username= document.getElementById('username').value;
    //     var useremail= document.getElementById('useremail').value;
             
    //     alert("hello, " + username + " we have received your message. Thank you for reaching out to us.")
    // }


   
// })