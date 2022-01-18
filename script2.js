// var p1 = document.getElementById('order1').addEventListener('click',function(){
//     var price1 =1000
//     function process(price){
//         price1 =price
//         receiveSize(price1)
//     }
    
//     cost = null

//     function receiveSize(price1){
//         var smallSelect = document.getElementById("small");
//         var mediumSelect = document.getElementById('medium');
//         var largeSelect = document.getElementById('large');
    
//         var size ='' 
    
//         if(smallSelect.checked == true){
//             size = 'Small'
//             cost= price1

//         }
//         else if(mediumSelect.checked == true){
//             size = 'Medium'
//             cost = price1 *1.2
//         }
//         else if(largeSelect.checked == true){
//             size ='Large'
//             cost =price1 * 1.5
//         }
//         receiveTopping(cost,size)
        
    
//         alert(size)
    
//         return size;
//     } 
    

//     function receiveTopping(cost,size){
//         var checkedItems =[] 
        
//         var sausage = document.getElementById("Selection2");
//         var Pepperoni = document.getElementById('Selection1');
        
//         var onion = document.getElementById('Selection3');
//         var Mushroom = document.getElementById('Selection4');
//         var BlackOlives = document.getElementById('Selection5');
//         var GreenPepper = document.getElementById('Selection6');
//         if(sausage.checked == true){
//             var s = document.getElementById("Selection2").value;
            
//             alert(s)
//             cost = cost *1.1
            
//             checkedItems.push(s)
            
//         }
//         if(Pepperoni.checked == true){
//             var p = document.getElementById("Selection1").value;
//             cost = cost *1.2
//             alert(p)
//             checkedItems.push(p)
//         }
//         if(onion.checked == true){
//             var o = document.getElementById("Selection3").value;
//             cost = cost *1.3
//             alert(o)
//             checkedItems.push(o)
//         }
//         if(Mushroom.checked == true){
//             var m = document.getElementById("Selection4").value;
//             cost = cost *1.1
//             alert(m)
//             checkedItems.push(m)
    
//         }
//         if(BlackOlives.checked == true){
//             var b = document.getElementById("Selection5").value;
//             cost = cost *1.2
//             alert(b)
//             checkedItems.push(b)
//         }
//         if(GreenPepper.checked == true){
//             var g = document.getElementById("Selection6").value;
//             cost = cost *1.3
//             alert(g)
//             checkedItems.push(g)
//         }
//         receiveDelivery(cost)
//         alert(checkedItems)
    
//        return checkedItems;

//     }})

//     function receiveDelivery(cost){
//         var delivery = document.getElementById('derivery');
//         if (delivery.checked ==true){
//             location =prompt('Enter delivery location: ')
//             alert('Delivery fee is ksh. 200')
//             cost=cost +200
//             alert('total cost is: ' + cost)
//         }
        
//     }