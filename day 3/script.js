
    var xhr = new XMLHttpRequest();

xhr.open("GET", "/myResume.json");

xhr.onload = function(){
    var a = JSON.parse(this.response);
    console.log(a);
    var txt = ""
  
       for(let key in a){
           if(key == "Education"){
               txt+=`<h1>${key} : </h1>`;
               var data = a.Education;
                
               for(let Info in data){
                   for(let d in data[Info]){
                txt+= `<h1>${d} : ${data[Info][d]}</h1><br />`
               }}
               
           }else if(key == "Certifications"){
            txt+=`<h1>${key} : </h1>`;
               for(let i = 0; i < a.Certifications.length; i++){
                txt+= `<h1>${i+1}. ${a.Certifications[i]}</h1><br />`
               }
           }
           else{
        txt+= `<h1>${key} : ${a[key]}</h1><br />`
}
    }

 
    document.getElementById('root').innerHTML = txt
}
xhr.onerror = function(){
    console.log("Error:" + this.statusText);
}

xhr.send();




