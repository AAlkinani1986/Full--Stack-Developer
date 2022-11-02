import Backpack from "./Backpack.js";
const updateBackpack = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(update);
  };

const backpack = new Backpack(
    "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false, 
);
const markup = (backpack) =>{
    return `
    <div>
    <h3> ${backpack.name} </h3>
    <ul> 
    <li> Valume: ${backpack.name} </li>
    <li> Color: ${backpack.color} </li>
    <li> Number of pockets: ${backpack.pocketNum} </li>
    <li> Strap length: L: ${backpack.straplengthL},R: ${backpack.straplengthR} </li>
    <li> Top lid: ${backpack.lidStatus ? "open" : "close"} </li>

    </ul>
    
    </div>
    
    `
        
}
const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);