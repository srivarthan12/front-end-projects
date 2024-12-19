var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("addpopupbutton")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

const cancelpopup=document.getElementById("cancelpopup1") 

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    
})

//select  container,addquote,quotesourceinput,quotedescription

var container=document.querySelector(".container")
var addquote=document.querySelector(".addquote")
var quotesourceinput=document.getElementById("quotesourceinput")
var quotedescription=document.getElementById("quotedescription")

addquote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","quote1")
    div.innerHTML=`<h5>${quotesourceinput.value}</h5>
    <P>${quotedescription.value}</P>
    <button onclick="deletequote(event)" class="button">delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
   
})

function deletequote(event){
    event.target.parentElement.remove()
}