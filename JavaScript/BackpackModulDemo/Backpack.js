class Backpack{
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,

    )
    {
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLengthL = strapLengthL;
        this.strapLengthR= strapLengthR;
        this.lidOpen = lidOpen;
    }
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, LengthRight){
    this.straplength.left = lengthLeft;
    this.straplength.right = LengthRight;
   
    }
}
export default Backpack;