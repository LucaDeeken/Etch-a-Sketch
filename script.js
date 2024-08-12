// the JavaScript file
const body= document.querySelector("#body");
body.style.cssText = "display: flex; flex-wrap: wrap; justify-content: center";

const title = document.createElement("div");
title.textContent= "Hey";
title.style.cssText = "font-size:30px; margin: 50px; flex-direction: column; text-align: center";

const fieldBox = document.querySelector(".test");
fieldBox.style.cssText = "display: flex;flex-wrap: wrap; width: 960px; height: 960px; margin: 0px";

body.insertBefore(title, fieldBox);
title.appendChild(fieldBox);


for (let i=0; i<1600; i++) {
    const div = document.createElement("div");
    fieldBox.appendChild(div);
    div.style.cssText= "border: solid black 100%; padding: 100%;";
};


