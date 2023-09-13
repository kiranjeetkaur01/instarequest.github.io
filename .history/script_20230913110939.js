var btn = document.querySelector("button")
var istatus = document.querySelector("h5")
var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML = "Request Sending"
    istatus.style.color = ""
    btn.innerHTML = "Remove Friend"
    flag = 1
    }
    else{
        istatus.innerHTML = "Strangers"
        istatus.style.color = "Red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})