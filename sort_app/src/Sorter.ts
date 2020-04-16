interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export class Sorter {
  constructor(public collection: Sortable) {
  }

  sort(): void {
    const { length } = this.collection

    // nested for loop to iterate through length - 1 on each iteration
    // e.g. for length 4, iterate through all 4, then first 3, then first 2, then first
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          if (this.collection.compare(j, j + 1)) {
            this.collection.swap(j, j + 1)
          }
      }
    }
  }
}