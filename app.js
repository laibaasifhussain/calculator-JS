var display = document.getElementById("display")


function getvalue(num){
    display.value += num;
    console.log(num);
}

function calculatevalue(){
    var ans = eval(display.value);
    display.value = ans;
    console.log(ans);

}


function clearAll(){
    display.value = "";
}
