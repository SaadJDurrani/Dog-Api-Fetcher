async function generate(){
   const breed=document.getElementById("search-breed").value.toLowerCase();
   const number=document.getElementById("number").value;
   const imageContainer=document.getElementById("image-container");
   imageContainer.innerHTML="";

   let res= await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${number}`)
   const data=await res.json()
   console.log(data.message)
   if (data.status === 'success') {
   data.message.forEach(imageurl => {
      const img=document.createElement('img');
      img.src=imageurl;
      imageContainer.appendChild(img);
      
   });
}
else{
   alert("breed not found")
}
}