const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

const pepsi: [string, boolean, number] = ['brown', true, 40]
pepsi[0] = 40 // TypeScript will complain

// same as above
// Type alias
type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

const carSpecs: [number, number] = [400, 3354]

// better to use objects to represent meaningful data
const carStats = {
  horsepower: 400,
  weight: 3354
}