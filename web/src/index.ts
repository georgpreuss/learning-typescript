import { User } from './models/User'

const user = new User({ name: 'Georg', age: 99})

user.set({ name: 'Gandalf' })
console.log(user.get('name'))
console.log(user.get('age'))