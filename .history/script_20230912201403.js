var btn = document.querySelector("button")
var istatus = document.querySelector("h5")
var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "Green"
    btn.innerHTML = "Remove Friend"
    flag = 1
    }
    else{

    }
})