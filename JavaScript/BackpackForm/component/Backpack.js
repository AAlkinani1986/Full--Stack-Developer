// Set up the Backpack class
class Backpack {
  constructor(
    id,
    name,
    volume,
    color,
    packetNum,
    strapLengthR,
    strapLengthL,
    LidOpen,
    dataAcquired,
    image,
  ) {
    this.id = id
    this.name = name
    this.volume = volume
    this.color = color
    this.packetNum = packetNum
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    }

    this.LidOpen = LidOpen
    this.dataAcquired = dataAcquired
    this.image = image
  }
  toggleLid(lidStatus) {
    this.LidOpen = lidStatus
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft
    this.strapLength.right = lengthRight
  }
  backpackAge() {
    let now = new Date()
    let acquired = new Date(this.dataAcquired)
    let elapsed = now - acquired // elapsed time in milliseconds;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24))
    return daysSinceAcquired
  }
}
export default Backpack
