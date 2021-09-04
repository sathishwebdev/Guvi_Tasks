
    var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.eu/rest/v2/all");

xhr.onload = function(){
    var a = JSON.parse(this.response);
    console.log(a);
    var txt = "";
    
  console.log(a);
     a.forEach(e => {
         txt += `<div><h1>${e.name}</h1>
         <p> 
         <ul> 
         <li>  <b> Region </b> : ${e.region} </li>
         <li> <b>Sub-Region </b>: ${e.subregion} </li> 
         <li> <b>Population</b> : ${e.population} </li> 
         </p>
         <img src="${e.flag}"/> </div> <br/>`
        console.log(e.flag , e.region , e.subregion, e.population);

     })
    

 
    document.getElementById('root').innerHTML = txt
}
xhr.onerror = function(){
    console.log("Error:" + this.statusText);
}

xhr.send();
