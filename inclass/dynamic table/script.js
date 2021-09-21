//creating bootstrap table

var table= document.createElement('table')
table.setAttribute('class', 'table')

var thead = document.createElement('thead')
thead.setAttribute('class', 'thead-dark')

var tr=document.createElement('tr')
var tr1=document.createElement('tr')

var th = [create('th', "First Name"),create('th', "Last Name")]


tr.append(...th)
thead.append(tr)

var tbody = document.createElement('tbody')

var td = [create('td', 'Sathish'),create('td', 'Kumar')]


tr1.append(...td)
tbody.append(tr1)
table.append(thead, tbody)
document.body.append(table)


//create th tag 
//<th> firstname </th>
//elementname <th>
// value - firstname
function create  (tagName, value) {
 var tag =   document.createElement(tagName)
 tag.innerHTML = value

 return tag
}

console.log("hi")