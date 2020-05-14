import { User } from './models/User'

const user = new User({ name: 'Georg', age: 99})

console.log(user.get('name'))
console.log(user.get('age'))