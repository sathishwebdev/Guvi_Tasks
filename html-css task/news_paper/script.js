var para1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae erat non mi suscipit viverra. Maecenas tristique, tellus ac consectetur convallis, nulla mauris tincidunt ligula, at faucibus magna turpis vel ex. Donec tempus arcu sed gravida ultricies. Ut turpis est, sagittis id placerat vel, suscipit vitae massa. Etiam non diam odio. Nam vitae velit mollis, bibendum augue tempus, lacinia urna. Aliquam sit amet maximus velit. Vestibulum quis nunc quam. Cras laoreet fermentum facilisis. Integer interdum aliquet mauris pulvinar faucibus. Proin ipsum leo, dictum nec vulputate quis, varius nec neque. Curabitur nec orci ac dui faucibus varius sit amet sit amet ligula. Mauris neque ante, varius id porttitor eget, aliquet et ex. Curabitur malesuada, purus eget suscipit suscipit, ligula justo mollis erat, et placerat sapien ante non nisi. Sed ipsum nisl, bibendum nec purus vel, malesuada interdum orci."

var para2 = "Morbi faucibus, lectus sed gravida fringilla, odio lectus consectetur ligula, eu euismod tellus ipsum vel lectus. Fusce ut felis eget augue commodo elementum convallis eget sapien. Proin malesuada convallis egestas. Praesent sed leo mattis, varius erat sed, sagittis orci. Quisque sed mi vel ligula mattis mollis"

var para3 = "Proin volutpat gravida metus sed blandit. Fusce porta lacus id iaculis tempor. Proin euismod lacus nec finibus condimentum. Praesent egestas massa vitae sem pellentesque sollicitudin. Sed pellentesque vulputate mauris, eu vulputate arcu tincidunt eget. Vestibulum ac vehicula eros. Fusce pretium erat nec luctus congue."

var topLine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae erat non mi suscipit viverra. Maecenas tristique, tellus ac consectetur convallis, nulla mauris tincidunt ligula, at faucibus magna turpis vel ex."

// assigning the values
// document.getElementById('topLine').innerHTML = topLine
// document.getElementById('p1').innerHTML = para2
paraGen('topLine', topLine)
paraGen('longPara', para1)
paraGen('shortPara', para2)
paraGen('para', para3)
function paraGen (cName, para){
for(let i in document.getElementsByClassName(cName)){
    document.getElementsByClassName(cName)[i].innerHTML= `<p>${para}</p>`
}
}