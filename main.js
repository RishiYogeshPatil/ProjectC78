var names=[
    "Rishi",
    "Roshani", 
    "Yogesh",
  ];
  var images=[
    "me.png",
    "mom.PNG",
    "dad.PNG"
  ];
  var i=0;
  function nextslide(){
    document.getElementById("Album").src=images[i];
    document.getElementById("names").innerHTML = names[i];
    i++;
     if(i==3)
      {
        i=0;
      }
  }