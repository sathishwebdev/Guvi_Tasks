
    var xhr = new XMLHttpRequest();


function showrecentposts(json){
  return  console.log(json.entry.title)
}

xhr.open("GET", "https://www.googleapis.com/blogger/v3/blogs/8783291873491079674/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&lables=OTD&maxResult=999&pageToken=CgkIChiP99enuC4Q-qOL8MStofJ5");

xhr.onload = function(){
    var a = JSON.parse(this.response);
    console.log(a);
//     var txt = "";
    
//   console.log(a);
//      a.forEach(e => {
//          txt += `<div><h1>${e.name}</h1>
//          <p> 
//          <ul> 
//          <li>  <b> Region </b> : ${e.region} </li>
//          <li> <b>Sub-Region </b>: ${e.subregion} </li> 
//          <li> <b>Population</b> : ${e.population} </li> 
//          </p>
//          <img src="${e.flag}"/> </div> <br/>`
//         console.log(e.flag , e.region , e.subregion, e.population);

    //  })
    

 
    // document.getElementById('root').innerHTML = txt
}
xhr.onerror = function(){
    console.log("Error:" + this.statusText);
}

xhr.send();




