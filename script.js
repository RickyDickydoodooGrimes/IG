let count = 0;
function liked(){
    
    if(count == 0){
        document.getElementById("like").src = "./img/liked2.png"
        count = count + 1;
    }
    else{
        document.getElementById("like").src = "./img/liked1.png"
        count = count - 1;
    }
}


let count1 = 0;
function liked1(){
    
    if(count1 == 0){
        document.getElementById("like1").src = "./img/liked2.png"
        count1 = count1 + 1;
    }
    else{
        document.getElementById("like1").src = "./img/liked1.png"
        count1 = count1 - 1;
    }
}