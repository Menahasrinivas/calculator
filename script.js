
//Create Element Using DOM:-//
const h1 = document.createElement("h1");
const p = document.createElement("p");
const container = document.createElement("div");
const calculator = document.createElement("div");
const input_box = document.createElement("div");
const numBtn = document.createElement("div");
const input = document.createElement("input");

const num = "C ← . X 7 8 9 / 4 5 6 - 1 2 3 + 0 00 =";
const numList = num.split(" ");

//Initiate Class Name:-
container.className = "container";
calculator.className = "calculator";
input_box.id = "inputBox";
numBtn.className = "nums";
input.id = "result";
h1.innerText = "Calculator"
h1.id = "title";
h1.className = "text-center"

//Initiation of tag p:-
p.innerText = "This calculator program Using DOM";
p.id = "description";
p.className = "text-center";

//Initiation of tag p:-
document.body.append(h1, p, container);
container.append(calculator);
calculator.append(input_box, numBtn);
//Using Get Element :-
const inputBox = document.getElementById("inputBox");
inputBox.append(input);

//function of button creation:-1
function buttons(valu) {
  let element = document.createElement("button");
  element.setAttribute("value", valu);
  element.setAttribute("id", valu);
  element.innerText = valu;
 //using Revealed Method:-
  let btnList = element.innerText;
  if (btnList == "C" || btnList === "←") {
    switch (btnList === valu) {
    
      case valu === "C":
        element.style.color = "red";
        element.id = "clear";
        element.value = "";
        element.addEventListener("click", () => {
          input.value = "";
        });
        break;
      case valu === "←":
         element.addEventListener('click', ()=>{
            input.value = input.value.slice(0, -1)
         })
         element.value = ""
         break;
    }
  }
  if (
    btnList === "X" ||
    btnList === "/" ||
    btnList === "-" ||
    btnList === "+" ||
    btnList === "."
  ) {
    element.style.color = "blue";
    switch (btnList === valu) {
      case valu === "+":
        element.id = "add";
        break;
      case valu === "-":
        element.id = "subtract";
        break;
      case valu=== "X":
        element.id = "multiplication";
        element.value = "*";
        break;
      case valu === "/":
        element.id = "division";
        break;
      case valu === ".":
        element.id = "point";
    }
  }
   //Using Input condition alert:-
  if (btnList === "=") {
    element.id = "equal";
    element.value = ""
    element.addEventListener("click",()=> {
      try{
         input.value = eval(input.value);
      }
      catch(error){
         alert("Invalid input")
         input.value = ""
      }
    })
  }

  element.addEventListener("click", () => {
    input.value += element.value;
  });

  return element;
}

//Using for loop for repeat the calculation process:-
for (let i = 0; i < numList.length; i++) {
  let inpt = buttons(numList[i]);
  numBtn.append(inpt);
}
