const add = (a: number, b: number): number => {
  return a + b
}

// No type inference for arguments!
// (But it works for output)

const addWithoutAnnotation = (a: number, b: number) => {
  return a + b
}

// Inference works for output. However, using annotation will help catch more errors!
// For example if you forget 'return'

const subtract = (a: number, b: number): number => {
  a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

// Void for functions that don't return anything or undefined
const logger = (message: string): void => {
  console.log(message)
}

// If you never reach the end of a function (very rare)
const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

logWeather(todaysWeather)

// same with destructuring
const logWeatherDestructured = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}
