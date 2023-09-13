var btn = document.querySelector("button")
var istatus = document.querySelector("h5")
var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML = "Request Sending"
    istatus.style.color = "rgb(255,212,18)"
    btn.innerHTML = "Remove Friend"
   setTimeout(function () {
    istatus.innerHTML = "Friends"
    istatus.style.color = "Green"
   
   },3000)
   flag=1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        flag = 0
    }
})