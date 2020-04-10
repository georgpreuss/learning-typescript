class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga')
  // }
  // color: string

  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)
// vehicle.drive()

class Van extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const someCar = new Van(4, 'red')
someCar.startDrivingProcess()
