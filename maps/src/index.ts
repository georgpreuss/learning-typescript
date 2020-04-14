// import { User } from './User'
// import { Company } from './Company'

// this should add a script as the first child
// const script = document.createElement('script')
// script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}`
// document.body.prepend(script)

// this should add a script before the existing script (after map div)
// const parentElement = document.getElementById('script').parentNode
// const script = document.getElementById('script')
// const googleScript = document.createElement('script')
// googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}`
// parentElement.insertBefore(googleScript, script)

new google.maps.Map(document.getElementById('map'), {
  zoom: 3,
  center: {
    lat: 0,
    lng: 0
  }
})