var xml = new XMLHttpRequest();

xml.open("GET", "https://restcountries.com/v3/all", true);
xml.send()
xml.onload = function(){
var data = JSON.parse(this.response)
console.log(data);
//a) countries from Asia
console.log(data.filter(countries=> countries.region === "Asia" ));

//b)countries with population < 200000
console.log(data.filter(countries => countries.population < 200000 ))

//c) get name, capital, flag using forEach
data.forEach(countries=> console.log( `name : ${countries.name.common} | Capital : ${countries.capital} | flag : ${countries.flags[1]}`));

//d) calculate the populations by using reduce
console.log(data.reduce((accum, popu)=> accum + popu.population, 0))

//e) print the countries only has USD
console.log(data.filter(countries => {   
    for(let i in countries.currencies){
        if(countries.currencies[i].code === 'USD') return true
    }
}))
}
xml.onerror = function(){
    console.log("Error:" + this.statusText);
}