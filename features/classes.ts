class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga')
  // }

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle()
// vehicle.drive()

class Van extends Vehicle {
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const someCar = new Van()
someCar.startDrivingProcess()
