// lets start






// initiate some usefull variables
var foodData = []
var id = 0
var ans5 = document.getElementById('ans5')
var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var gender = document.querySelector('input[name="gender"]:checked')
var address =  document.getElementById('address')
var country = document.getElementById('country')
var stateEle = document.getElementById('state')
var pincode =  document.getElementById('pincode')
var tbody = ans5.querySelector('tbody')
const cs = fetch('countries_states.json').then(response => response.json())


//creating td element by function 

function td(){
    return document.createElement('td')
}

 







// countries and state data 





cs.then(csdata => {
   //appending all country names 
    
    csdata.map(counData => {
        for (let i in counData.country){
            let option = document.createElement('option')
            option.setAttribute('value', counData.country[i])
            option.innerHTML = counData.country[i]
            country.append(option)
        }
    } )
// console.log(csdata)
})


// country.addEventListener('change', ()=>console.log(country.value))

country.addEventListener('change',() => appState(country.value))

//appending state names according to country that selected by user
function appState(countryValue){
    cs.then(data=>{
     var   keys =  Object.keys(data[0].country)

       keys.forEach(key =>{
           if(data[0].country[key]== countryValue){
        
               data[0].states[key].map(state =>{
                 let option = document.createElement('option')
                  option.setAttribute('value', state.name)
                  option.innerHTML = state.name
                  stateEle.append(option)
               })
           }
           
       })
    })

}

 //food count alert

if(foodData.length > 1 || foodData.length == 0 ){
      document.getElementById('food-alert').style.display = "none" 
  }else{
   document.getElementById('food-alert').style.display = "block"
  }



// get data from form
const getData = () =>{

// make foods data as useable array format

    for(var fval of document.querySelectorAll('input[name="foods"]:checked')){
               foodData.push(fval.value)
           }
   
// arrange form data

   var formData = {
       "firstName" :  firstName.value,
       "lastName" : lastName.value,
       // dono why gender var not working on this
       "Gender" : document.querySelector('input[name="gender"]:checked')? document.querySelector('input[name="gender"]:checked').value : "not defined",
       "foods" : foodData,
       "address": address.value,
       "country" : country.value,
       "state": stateEle.value,
       "pincode" : pincode.value
   
   }

  
  

   return formData
}

// temperory database update when form submit

function updateTable(){
   id++
  var data = getData()
  if(data.foods.length >1){
var tr = document.createElement('tr')
  var tableData = [td(), td(), td(), td(), td(), td(), td(), td(), td()] 
  tableData[0].innerHTML = id
  tableData[1].innerHTML = data.firstName
  tableData[2].innerHTML = data.lastName
  tableData[3].innerHTML = data.Gender
  tableData[4].innerHTML = data.foods
  tableData[5].innerHTML = data.address
  tableData[6].innerHTML = data.state
  tableData[7].innerHTML = data.pincode
  tableData[8].innerHTML = data.country
   tr.append(...tableData)
   tbody.append(tr)} else{
       alert("You must select minimun two foods")
   }

}

// autofocus on firstname after submitting the form and clear all the input valure
function af(){
foodData = []
   document.getElementById('form').reset();

   document.getElementById('firstName').focus()

}








