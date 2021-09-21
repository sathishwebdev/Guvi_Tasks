
fetch('https://www.googleapis.com/blogger/v3/blogs/8783291873491079674/posts?key=AIzaSyBSa0px6K3mH5HkhhzbH_Tl4MQiHysI03A&fetchImages=true&lables=OTD&maxResult=999')
  .then(response => response.json())
  .then(data =>{
      console.log(data) 
    const items = data.items, token = data.nextPageToken
    console.log(items,token)
    var featured = `  <div class="carousel-item active ">
    <div  class ="row justify-content-center align-items-center">
    <div class ="col-6 d-none d-lg-block ">
    <div class="col-6 m-auto" >
      <h2 style="fontSize:30px">  
      <a style="width: fit-content ; textDecoration: none" target="_blank" href="" > ${items[0].title} </a></h2></div>
    </div>
     <div  class ="col-12 col-sm-6 feaImg" >
       <img style="box-shadow: inset white 10px 10px 15px" src="${items[0].images[0].url} width="100%"  />
       <div class ="reimg d-none d-lg-block"></div>
       <div class ="eimg d-block d-lg-none">
 
       </div>
 </div>
    <div class ="container d-block d-lg-none" style="border: none;  z-index:1; margin-bottom: 3%"">
    <h2 style="fontSize:30px; color:black; textTransform: uppercase"> 
      <a  style="width:fit-content; textDecoration:none;" target="_blank" href=" " > ${items[0].title} </a></h2></div>
     </div>

</div>`
    for(let i = 1 ; i < 3; i++){
        console.log(items[i].title)
        
   featured += `<div class="carousel-item  "> <div  class ="row  align-items-center">
   <div class ="col-6 d-none d-lg-block ">
   <div class="col-6 m-auto" >
     <h2 style="fontSize:30px">  
     <a style="width: fit-content ; textDecoration: none" target="_blank" href="" > ${items[i].title} </a></h2></div>
   </div>
    <div  class ="col-12 col-lg-6 feaImg" >
      <img style="box-shadow: inset white 10px 10px 15px" src="${items[i].images[0].url} width="100%"  />
      <div class ="reimg d-none d-lg-block"></div>
      <div class ="eimg d-block d-lg-none">

      </div>
</div>
   <div class ="container d-block d-lg-none" style="border: none;  z-index:1; margin-bottom: 3%">
   <h2 style="fontSize:30px; color:black; textTransform: uppercase">  <a  style="width:fit-content; textDecoration:none;" target="_blank" href=" " > ${items[i].title} </a></h2></div>
    </div></div>`
    }

    document.getElementById('featured').innerHTML = featured
   
    })
