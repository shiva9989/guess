
var a = Math.ceil(Math.random()*100);
console.log(a)
var count = 0;

function findnumber(){
   
    var value = parseInt(document.getElementById("n1").value);
    count++;
    if(value == a){
        document.getElementById("msg").textContent = "Congratulation!! you have guessed correct number in "+count+" tries";
    }
    else if(value>a){
        document.getElementById("msg").textContent = "Try with the smaller number";
    }
    else{
        document.getElementById("msg").textContent= "Try with the greater number";

    }
    
    document.getElementById("tries").textContent = count;
}