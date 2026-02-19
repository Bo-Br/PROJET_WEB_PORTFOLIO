const mode_btn = document.querySelector("#color_mode")
let theme = "d"

mode_btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  if (theme == "d"){
    mode_btn.textContent = "Light Mode"
    theme = "l"
  }else{
    mode_btn.textContent = "Dark Mode"
    theme = "d"
  }
});
