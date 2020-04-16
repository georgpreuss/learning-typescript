export abstract class Sorter {

  abstract length: number
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void

  sort(): void {
    const { length } = this

    // nested for loop to iterate through length - 1 on each iteration
    // e.g. for length 4, iterate through all 4, then first 3, then first 2, then first
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1)
          }
      }
    }
  }
}