

  const img=document.querySelector("#product-img");

   // Create an Array of Objects

   var images=[{
               	path:"img/",
               	src:"bag-red.png",
               	color:"#a53229"
               },
               {
               	path:"img/",
               	src:"bag-blue.png",
               	color:"#354bb0"
               },
               {
               	path:"img/",
               	src:"bag-green.png",
               	color:"#32b160"
               },
               {
               	path:"img/",
               	src:"bag-gray.png",
               	color:"#767676"
               }]

       const index=2;

    // Create pagination buttons
     function pagination() {
          for(let i=0; i<images.length;i++){
          	 const button=document.createElement("button");
          	       button.id=i;
          	       button.setAttribute("onclick","changeImage(this)")
          	       button.style.backgroundColor=images[i].color;
                   // add active class to button
                   if(i==index){
                   	button.classList.add("active");
                   }

          	       document.querySelector(".pagination").appendChild(button);
          }
     }

      // change image when pagination button click

      function changeImage(element){
           img.src=images[element.id].path + images[element.id].src;
           const buttons=document.querySelector(".pagination").children;

            for(let i=0; i<buttons.length; i++){
            	if(buttons[i].id==element.id){
            		buttons[i].classList.add("active");
            	}
            	else{
            		buttons[i].classList.remove("active");
            	}
            }
      }
       
       // set image byDefault
       img.src=images[index].path + images[index].src;

  // call pagination function when window load
  window.onload=pagination();









