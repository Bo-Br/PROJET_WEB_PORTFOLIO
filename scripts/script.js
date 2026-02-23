// ############################################################################################
// -------------------------------- HTML ELEMENTS SELECTION -----------------------------------
// ############################################################################################

const mode_btn = document.querySelector("#color_mode")
const api_zone = document.querySelector("#api_zone")
const project_cards_zone = document.querySelector("#projects") 

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

// ###########################################
// ------------ CALLING API'S ----------------

    catApi()
    dogApi()

// ###########################################

    if(localStorage["mode"] == "l"){
        light_mode();
    }else{
        dark_mode();
    }
});

// idk why I created this
addEventListener("scroll", () => {
    console.log("scrolled");
});

// ############################################################################################
// ----------------------------------------- API's -------------------------------------------
// ############################################################################################
// ----- CAT FACT TEXT API ---
// ############################


const CAT_API_URL = "https://catfact.ninja/fact";
// const api_zone = document.querySelector("#api_zone") it is used here but it is created on the top

async function catApi(){
    try{
        let response = await fetch(CAT_API_URL);
        let data = await response.json();
        console.log("catAPIloaded");
        console.log(data);
        const cat_fact = data["fact"];
        api_zone.innerHTML = `
        <p>-- Cat fact (API exercise): ${cat_fact} --</p>
        `;

    }catch(error){
            console.error('CatAPI Error: ' + error);
            api_zone.innerHTML = `
        <p>-- Cat fact not available (check log) --</p>
        `;
    };

};

// ############################
// ---- DOG IMAGE CARD API ---
// ############################

// const project_cards_zone = document.querySelector("#projects") it is used here but it is created on the top
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random" 

async function dogApi(){
    try{
        let response = await fetch(DOG_API_URL);
        let data = await response.json();
        console.log("dogAPIloaded");
        console.log(data);
        let img = data["message"]
        project_cards_zone.innerHTML += `
            <div class = "card">
                <div>
                    <img class = "proj_img" src=${img} alt="">
                </div>

                <h3> Image avec API </h3>

                <div class = "zone_badges">

                    <div class = "badges">
                        <p>Web API</p>
                    </div>
        `;
    }catch(error){
        console.error("DogAPI Error: "+ error)

    }
};

// ################
