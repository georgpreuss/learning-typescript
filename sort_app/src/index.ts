class Sorter {
  constructor(public collection: number[]) {
  }

  sort(): void {
    const { length } = this.collection

    // nested for loop to iterate through length - 1 on each iteration
    // e.g. for length 4, iterate through all 4, then first 3, then first 2, then first
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j]
          this.collection[j] = this.collection[j+1]
          this.collection[j+1] = leftHand
        }
      }
    }
  }
}

const sorter = new Sorter([10,3,-5,0])
sorter.sort()
console.log(sorter.collection)