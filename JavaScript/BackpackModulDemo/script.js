const backpack = {
name: "Everyday Backpack",
valume: 30,
color: "red",
pocketNum: 15,
straplength:{
    left: 26,
    right: 26,
},
lidOpen: false,
toggleLid: function(lidStatus){
    this.lidOpen = lidStatus;
    updateBackpack("lid status has changed.");
},
newStrapLength: function (lengthLeft, LengthRight){
this.straplength.left = lengthLeft;
this.straplength.right = LengthRight;
updateBackpack('Strap Lengths updated.')
},
}
const markup = (backpack) =>{
    return `
    <div>
    <h3> ${backpack.name} </h3>
    <ul> 
    <li> Valume: ${backpack.name} </li>
    <li> Color: ${backpack.color} </li>
    <li> Number of pockets: ${backpack.pocketNum} </li>
    <li> Strap length: L: ${backpack.straplength.left},R: ${backpack.straplength.right} </li>
    <li> Top lid: ${backpack.lidStatus ? "open" : "close"} </li>

    </ul>
    
    </div>
    
    `
        
}
const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);