

var count =1

const p = new Promise((resolve, reject) => {
    count++;
    if(count === 2) resolve(count)
    else reject("You are rejected")
})
console.log(p)
var one = p.then(data => {console.log(data)
return data + 5} ).catch(err => console.log(err))


var two = one.then(val =>{ console.log(val)
     return val + 1}).catch(err => console.log(err))

console.log(one)

two.then(data => console.log(data))                        



// promise chain process

const twice = (num) => new Promise((resolve, reject) =>{ resolve(num*2); reject('rejected') } );

twice(2).then(ans=> {
    console.log(ans)
    return twice(ans)
}).then(ans2=> console.log(ans2)).catch(err=>console.log(err))



// day 2 - fetch 

let temp = fetch('https://restcountries.com/v2/all').then(data => data.json()).catch(err=>console.log(err))

temp.then(data=>{
    console.log(data)
    console.log(data[0].name)
    var load = "loading..."
    console.log(load)
    // data.map(data=> {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].name}&appid=55c02863927c3524a582eececf44f7dd`).then(data => data.json()).then(  data => {
       
       console.log(data)
    }).catch(err=> console.log(err)) 
    })
    
     
// })

//api.openweathermap.org/data/2.5/weather?q={city name}&appid=55c02863927c3524a582eececf44f7dd
