import { User } from './models/User'

const user = new User({ name: 'Georg', age: 99})

user.on('eatBananas', () => {
  console.log('Change #1')
})
user.on('eatBananas', () => {
  console.log('Change #2')
})
user.on('save', () => {
  console.log('Save was triggered')
})

user.trigger('eatBananas')