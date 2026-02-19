const mode_btn = document.querySelector("#color_mode")
let theme = "l"

// to set light mode
function light_mode(){
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    mode_btn.textContent = "Light Mode"
    theme = "l"
    localStorage.setItem("mode", theme)

}

// to set dark mode
function dark_mode(){
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    mode_btn.textContent = "Dark Mode"
    theme = "d"
    localStorage.setItem("mode", theme)

}

// Click on change colore mode button
mode_btn.addEventListener("click", () => {
  if (theme == "d"){
    light_mode()
  }else{
    dark_mode()
  }
});
// On page load
addEventListener("DOMContentLoaded", () =>{
    console.log(localStorage["mode"])
    if(localStorage["mode"] == "l"){
        light_mode()
    }else{
        dark_mode()
    }
})

