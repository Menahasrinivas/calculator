//!Creating Elements:-

const num = "C ← . X 7 8 9 / 4 5 6 - 1 2 3 + 0 00 = ";
const numList = num.split(" ");

const h1 = document.createElement("h1");
const p = document.createElement("p");
const container = document.createElement("div");
const calculator = document.createElement("div");
const input_box = document.createElement("div");
const numBtn = document.createElement("div");
const input = document.createElement("input");

//Initiate the class name:-
container.className = "container";
calculator.className = "calculator";
input_box.id = "inputBox";
numBtn.className = "nums";
input.id = "result";
h1.innerText = "Calculator";
h1.id = "title";
h1.className = "text-center";

//Initiation of tag p:-
p.innerText = "This calculator program Using DOM";
p.id= "description";
p.className = "text-center";

//Using append method:-
document.body.append(h1, p, container);
container.append(calculator);
calculator.append(input_box,numBtn);

const inputBox = document.getElementById("inputBox");
inputBox.append(input);

//Buttton creation:-
function buttons(vall){
  let element = document.createElement("button");
  element.setAttribute("value", vall);
  element.setAttribute("id", vall);
  element.innerText= vall;
  //Using revealed method:-
  let btnList = element.innerText;
  if (btnList == "C" || btnList === "←"){
    switch(btnList === vall){

      case vall ==="C":
        element.style.color = "red";
        element.id = "clear";
        element.value = "";
        element.addEventListener("click",()=>{
          input.value = "";
        });
        break;
        case vall ==="←":
          element.addEventListener("click",()=>{
            input.value = input.value.slice(0,-1)
          })
          element.value = ""
          break;
    }
  }
if(
  btnList ==="X" ||
  btnList ==="/" ||
  btnList ==="-" ||
  btnList ==="+" ||
  btnList ==="." 
  ) {
    element.style.color = "blue";
    switch(btnList === vall){
      case vall ==="+":
        element.id="add";
        break;

        case vall ==="-":
        element.id="subtract";
        break;

        case vall ==="X":
        element.id="multiplication";
        element.value = "*";
        break;

        case vall ==="/":
        element.id="division";
        break;

        case vall ===".":
        element.id="point";
        
    }
  }
  //Using input condition alert:-
  if(btnList === "="){
    element.id = "equal";
    element.value = ""
    element.addEventListener("click",()=>{
      try{
        input.value = eval(input.value);
      }
      catch(error){
        alert("Invalid input")
        input.value = ""
      }
    })
  }

  element.addEventListener("click",()=>{
    input.value += element.value;
  });
  return element;
}

//Using for loop repeat the calculation proces:-
for(let i=0;i<numList.length;i++){
  let inp = buttons(numList[i]);
  numBtn.append(inp);
}