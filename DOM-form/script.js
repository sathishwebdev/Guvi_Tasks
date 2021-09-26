// lets start




var id = 0

var ans5 = document.getElementById('ans5')
var workspace5 = document.getElementById('name')

var tbody = ans5.querySelector('tbody')
function td(){
    return document.createElement('td')
}

// workspace5.addEventListener('change', convertData)
function updateTable(){
    id++
var tr = document.createElement('tr')
   var tableData = [td(), td(), td()] 
   tableData[0].innerHTML = id
   tableData[1].innerHTML = workspace5.value
   tableData[2].innerHTML = " here"
    tr.append(...tableData)
    tbody.append(tr)
    workspace5.value= ""
    
}
//  console.log(document.getElementById('workspace5').autofocus)
function af(){
    document.getElementById('name').focus()
}













// countries and state data 

const cs = fetch('countries_states.json').then(response => response.json())


cs.then(data => console.log(data))