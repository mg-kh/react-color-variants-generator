import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAsfNYD6u5EXlYlsJda_stg4lO8ZHxtVbY',
  authDomain: 'react-color-generator.firebaseapp.com',
  projectId: 'react-color-generator',
  storageBucket: 'react-color-generator.appspot.com',
  messagingSenderId: '998178983701',
  appId: '1:998178983701:web:f3e5bc81353fddc053231c',
  measurementId: 'G-35H5J8MT5P',
}
const app = initializeApp(firebaseConfig)

export { app }
