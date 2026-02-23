const mode_btn = document.querySelector("#color_mode")

// ############################################################################################
// ------------------------------------- COLOR MODES ------------------------------------------
// ############################################################################################

let theme = "l";

if(localStorage["mode"] == undefined){
    localStorage["mode"] = theme;
};

// to set light mode
function light_mode(){
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    mode_btn.textContent = "Light Mode";
    theme = "l";
    localStorage.setItem("mode", theme);
};

// to set dark mode
function dark_mode(){
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    mode_btn.textContent = "Dark Mode";
    theme = "d";
    localStorage.setItem("mode", theme);
};

// Click on change colore mode button
mode_btn.addEventListener("click", () => {
  if (theme == "d"){
    light_mode();
  }else{
    dark_mode();
  }
});

// On page load
addEventListener("DOMContentLoaded", () =>{
    catApi()
    if(localStorage["mode"] == "l"){
        light_mode();
    }else{
        dark_mode();
    }
});

addEventListener("scroll", () => {
    console.log("scrolled");
});

// ############################################################################################
// ----------------------------------------- API's --------------------------------------------
// ############################################################################################
// ------- cat API
// ################

const url = "https://catfact.ninja/fact"
api_zone = document.querySelector("#api_zone")

async function catApi(){
    try{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const cat_fact = data["fact"]
    api_zone.innerHTML = `
    <p>-- Cat fact (API exercise): ${cat_fact} --</p>
    `

    }catch(error){
        console.error('Erreur' + error)
        api_zone.innerHTML = `
    <p>-- Cat fact not available (check log) --</p>
    `
    }

}

// ################
