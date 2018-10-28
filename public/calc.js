
function calculated(){
    let res = calculate(document.getElementById("price").value,document.getElementById("percent").value);
    
    if(isNaN(res)){
        $('#result').html("Please enter valid numbers");
   }
    else{
        $('#result').html("$"+parseFloat(res).toFixed(2));
    }
}

function calculate(x,y){

    let res = x*(1-y/100);
    return res;
}

