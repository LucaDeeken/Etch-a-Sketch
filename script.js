// the JavaScript file
const body= document.querySelector("#body");
body.style.cssText = "display:flex; flex-wrap: wrap; justify-content: center; flex-direction: column";

const title = document.createElement("div");
title.textContent= "Etch-a-Sketch!";
title.style.cssText = "display: flex; font-size:35px; margin: 40px; margin-top: 20px; justify-content: center; font-weight: bold";

const div2 = document.createElement("div");
div2.style.cssText = "display:flex; justify-content: center; gap: 50px";

const div3 = document.createElement("div");
div3.style.cssText = "display: flex; flex-direction: column; justify-content: center; gap: 200px";

const fieldBox = document.querySelector(".test");
fieldBox.style.cssText = "display: flex;flex-wrap: wrap; min-width:960px; max-width:960px; max-height:960px; min-height: 960px; margin: 0px; border: solid black 4px";

const button = document.createElement("button");
button.style.cssText = "font-size:30px; margin-top: 10px; margin-right: 55px; margin-left:55px; padding: 30px; padding-top:20px; padding-bottom: 20px; font-weight: bold; border: solid black 3px; border-radius: 10px";
button.textContent = "Change Size";

const reset = document.createElement("button");
reset.style.cssText = "font-size:30px; margin-top: 10px; margin-right: 110px; margin-left:110px; padding: 30px; padding-top:20px; padding-bottom: 20px; font-weight: bold; border: solid black 3px; border-radius: 10px";
reset.textContent = "Reset";

body.appendChild(title);
body.appendChild(div2)
div2.appendChild(div3);
div2.appendChild(fieldBox);
div3.appendChild(button);
div3.appendChild(reset);




for (i=0; i<256; i++) {
    const span = document.createElement("span");
    fieldBox.appendChild(span);
    span.style.cssText= "border: solid black 0.1px; box-sizing: border-box; width: 60px; height: 60px";
    span.classList.add("span");

    span.addEventListener("mouseout", () => {
        
        span.classList.add("spanHoverOut");

    })
    };




let frage="";
let x=256;
let size=60;
let alert1="";
numbers = [x, size];

button.addEventListener("click", () => {
    frage= prompt("How many grids per line? (100 max.)");
    if (frage>100) {
        alert1= alert("Inputnumber is too high!")
        return;
    }
    fieldBox.innerHTML = "";
    x = frage*frage;
    size = 960 / frage;
    for (i=0; i<x; i++) {
        const span = document.createElement("div");
        fieldBox.appendChild(span);
        span.style.cssText= "border: solid black 0.1px; box-sizing: border-box";
        span.style.width = `${size}px`;
        span.style.height = `${size}px`;
        span.classList.add("span");

        span.addEventListener("mouseout", () => {
            
            span.classList.add("spanHoverOut");
    
        })
    }
    numbers = [x, size];
    return numbers;

  });


// reset function
  reset.addEventListener("click", () => {
    fieldBox.innerHTML = "";
    console.log(numbers);
    let [x, size] = numbers;
    console.log(x);
    for (i=0; i<x; i++) {
        const span = document.createElement("div");
        fieldBox.appendChild(span);
        span.style.cssText= "border: solid black 0.1px; box-sizing: border-box";
        span.style.width = `${size}px`;
        span.style.height = `${size}px`;
        span.classList.add("span");

        span.addEventListener("mouseout", () => {
            
            span.classList.add("spanHoverOut");
    
        })
    }
  });


