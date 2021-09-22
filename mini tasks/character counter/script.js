//function for change the color
function colorChanger (div, span){
    
for(let i = 0; i < div.length; i++){
   div[i].addEventListener("mouseover", ()=>{
    div[i].style.color="red"

})
div[i].addEventListener("mouseout", ()=>{
    div[i].style.color=""
})
}

    for(let i = 0; i < span.length; i++){
        span[i].addEventListener("mouseover", ()=>{
         span[i].style.color="green"
     })
     span[i].addEventListener("mouseout", ()=>{
         span[i].style.color=""
     })
     }

}
var workspace1 = document.getElementById('workspace1')
var ans_div = workspace1.querySelectorAll('div')
var ans_span = workspace1.querySelectorAll("span")
colorChanger(ans_div, ans_span)

// var code = workspace1.getElementsByTagName('code')
// console.log(code)
