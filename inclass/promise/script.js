

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