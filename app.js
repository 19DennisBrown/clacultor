

let   themeButton   =   document.getElementById("themes");

themeButton.onclick = function(){
  document.body.classList.toggle("theme-dark");
  if(document.body.classList.contains("theme-dark")){
    themeButton.innerText = "Sun";
  }
  else{
    themeButton.innerText = "Moon";

  }
};