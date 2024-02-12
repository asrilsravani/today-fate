
function isFate(){
    var x = document.getElementById("fate").value;
    if(x%12==0){
        alert("Your work will be done soon.");
    }
    else if(x%12==1){
        alert("Make some effort for completion of work.");
    }
    else if(x%12==2){
        alert("You get the best.");
    }
    else if(x%12==3){
        alert("Just with a small idea your work will complete.");
    }
    else if(x%12==4){
        alert("Your wish will complete very soon.");
    }
    else if(x%12==5){
        alert("absolute and accurate result is infront of you.");
    }
    else if(x%12==6){
        alert("Fifty-fifty chances.");
    }
     else if(x%12==7){
        alert("You don't get any result in this work.");
     }
     else if(x%12==8){
        alert("The result for your work is initiated.");
     }
     else if(x%12==9){
        alert("Some troubles stop your work.");
     }
    else if(x%12==10){
        alert("You are lucky and your wish will complete soon.");
    }
    else if(x%12==11){
        alert("Your all routes are very clear,any time the best result is soon.");
    }
}
function clr(){
    document.getElementById("fate").value =" ";
}
