//create the input element (date)
//create a workspace  element..
var workspace = document.getElementById('workspace');

//create a date input field
var dateElement = document.createElement('input');
dateElement.setAttribute('type','date');
dateElement.setAttribute('id','dob');
dateElement.setAttribute('name','dob');
dateElement.style.width = "50%" 
workspace .appendChild(dateElement);

//create a button element
var button=document.createElement('button');
button.innerHTML="display data";
button.setAttribute('class','btn btn-dark');
button.addEventListener('click',calculate);
workspace .appendChild(button);

var answer = document.getElementById('answer')

// function to print data


var fromTill = document.createElement('div')
fromTill.setAttribute('class', 'anSpace text-center')

var results = document.createElement('div')
results.setAttribute('class', 'anSpace d-flex justify-content-center align-items-center')
var subRe = document.createElement('div')
subRe.style.textAlign = "left"
results.append(subRe)
function calculate(){
var input = document.getElementById('dob');

//whether my input is a valid  date or not..??
if(Date.parse(input.value)){
    //standard representation
var inputDate=new Date(input.value);

//today's date

var currentDate= new Date();    //current date
var millisecondsDiff=parseInt(currentDate.getTime())-parseInt(inputDate.getTime());     //milli-second Difference
var secondsDiff =mathfloor(millisecondsDiff,1000); //seconds Difference
var minuteDiff=mathfloor(secondsDiff,60); //minutes
var hourDiff=mathfloor(minuteDiff,60); //hours
var dayDiff=mathfloor(hourDiff,24); //days
var yearDiff=getYear(inputDate,currentDate); //year
var monthDiff=getMonth(inputDate,currentDate); //month


// var rowData = [createEle('td'), createEle('td'), createEle('td'), createEle('td'), createEle('td'), createEle('td'), createEle('td'), createEle('td'), createEle('td')]
// rowData[0].innerHTML = 
// rowData[1].innerHTML = 
// rowData[2].innerHTML = yearDiff
// rowData[3].innerHTML = monthDiff
// rowData[4].innerHTML = dayDiff
// rowData[5].innerHTML = hourDiff
// rowData[6].innerHTML = minuteDiff
// rowData[7].innerHTML = secondsDiff
// rowData[8].innerHTML = millisecondsDiff




fromTill.innerHTML = `<h3>From : <span class="fromTill" >${inputDate.toDateString()}</span> - Till : <span class="fromTill" >${currentDate.toDateString()}</span><h3> `

subRe.innerHTML = `<p> No. Years : <span class="fromTill">${yearDiff}</span> years</p><p> No. Months : <span class="fromTill">${monthDiff}</span> months</p> <p> No. Days : <span class="fromTill">${dayDiff}</span> days</p> <p> No. Hours : <span class="fromTill">${hourDiff}</span> hr</p> <p> Minutes : <span class="fromTill">${minuteDiff}</span></p> <p> No. Seconds : <span class="fromTill">${secondsDiff}</span> s</p> <p> No. Milli-Seconds : <span class="fromTill">${millisecondsDiff}</span> ms</p>`

answer.append(fromTill, results);


}


else{
   alert("Invalid Date")
    fromTill.innerHTML=`<p class="fromTill">Invalid Date</p>`
    answer.append(fromTill)
}


input.value = ""
input.focus()

}






function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}

function getYear(value1,value2){
    var date1=new Date(value1);
    var date2=new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}


function getMonth(value1,value2){
var year=getYear(value1,value2);
var month=(year*12)+(value2.getMonth()-value1.getMonth());
return month;
}

