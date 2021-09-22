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

//answer 2

var ans2= document.getElementById('workspace2')

var buttonPromt = ans2.querySelector('button');

buttonPromt.addEventListener('click', ()=>{
   
   var span_ans2 = document.createElement('span');
   span_ans2.innerHTML ="<code>span</code> " + prompt("Enter the value") + " <code>/span</code> ";
var anspace2 = ans2.querySelector('.anSpace')

anspace2.append(span_ans2)
})

//answer 3
var ans3 = document.getElementById('ans3')
var anSpace_3 = document.getElementById('ans_3')
var workspace3 = ans3.querySelector('#workspace3')
function coOrdinates(event){
    anSpace_3.innerHTML = "X : " + event.pageX +"  " + "Y : " + event.pageY
}
workspace3.addEventListener('mousemove', coOrdinates, false )
workspace3.addEventListener('mouseenter', coOrdinates, false )
workspace3.addEventListener('mouseleave', coOrdinates, false )
workspace3.addEventListener('mouseout', coOrdinates, false )
workspace3.addEventListener('mouseover', coOrdinates, false )

//question 4

var ans4 = document.getElementById('ans4') //get ans 4 field
var workspace4 = ans4.querySelector('textarea') //get workspace
//function to update data
function updateCharCount(){
    var result = workspace4.value
    document.getElementById('ans_4').innerHTML = result.length
}
workspace4.addEventListener('keyup', updateCharCount, false)
updateCharCount()

//answer 5

{/* <tr>
<td><span id="value-5"></span></td>
<td><span id="bi-5"></span></td>
<td><span id="bi-5"></span></td>
</tr> */}
var ans5 = document.getElementById('ans5')
var workspace5 = ans5.querySelector('input')

var tbody = ans5.querySelector('tbody')
function td(){
    return document.createElement('td')
}

// workspace5.addEventListener('change', convertData)
function updateTable(){
var tr = document.createElement('tr')
   var tableData = [td(), td(), td()] 
   tableData[0].innerHTML = workspace5.value
   tableData[1].innerHTML = Number(workspace5.value).toString(2)
   tableData[2].innerHTML = Number(workspace5.value).toString(16)
    tr.append(...tableData)
    tbody.append(tr)
    workspace5.value= ""
    
}
//  console.log(document.getElementById('workspace5').autofocus)
function af(){
    document.getElementById('workspace5').focus()
}

// answer 6

var mobile_num = document.getElementById('mobile')
var name_6 = document.getElementById('name_6')

mobile_num.setAttribute('pattern', "[1-9]{1}[0-9]{9}")
mobile_num.setAttribute('max-length','10')
mobile_num.required = true
name_6.required =true

function val(){
    if(mobile_num.value.length < 10){
        alert("invalid mobile number. mobile must be equal to 10 digit")
    }else{
        alert("submited")
        console.log(`Name: ${name_6.value} \n Mobile No. : ${mobile_num.value}`)
        name_6.value = ""
        mobile_num.value=""
    }
}

//answer 7
var fullScrn = document.getElementById('fs_btn')
var exitFullScrn = document.getElementById('efs_btn')
function fullScreen(){
    console.log("full screen")
    fullScrn.disabled =true
    exitFullScrn.disabled =false
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
      }

}

function exitFullScreen(){
    console.log("exit full screen")
    fullScrn.disabled =false
    exitFullScrn.disabled =true
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
}

//answer 8
function openKeys() {
    window.open("http://127.0.0.1:5500/mini%20tasks/keys.html", "", "width=800,height=400,top=250,left=500");
    }



// answer9

var workspace9 = document.getElementById('workspace9')

workspace9.addEventListener('mouseenter', ()=>{
    workspace9.contentEditable = true
    workspace9.focus()
})
workspace9.addEventListener('mouseover', ()=>{
    workspace9.contentEditable = true
    workspace9.focus()
})

workspace9.addEventListener('mouseleave', ()=>{
    workspace9.contentEditable = false
})
workspace9.addEventListener('mouseout', ()=>{
    workspace9.contentEditable = false
})