import { app } from './firebase'
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // sendSignInLinkToEmail,
  signOut,
} from 'firebase/auth'

const auth = getAuth()

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider(app)
  return signInWithPopup(auth, provider).then((result) => {
    const { displayName, photoURL, uid } = result.user
    return { displayName, photoURL, uid }
  })
}

const loginWithFacebook = () => {
  const provider = new FacebookAuthProvider(app)
  return signInWithPopup(auth, provider).then((result) => {
    const { displayName, photoURL, uid } = result.user
    return { displayName, photoURL, uid }
  })
}

const loginWithGithub = () => {
  const provider = new GithubAuthProvider(app)
  return signInWithPopup(auth, provider).then((result) => {
    const { displayName, photoURL, uid } = result.user
    return { displayName, photoURL, uid }
  })
}

const loginWithTwitter = () => {
  const provider = new TwitterAuthProvider(app)
  return signInWithPopup(auth, provider).then((result) => {
    const { displayName, photoURL, uid } = result.user
    return { displayName, photoURL, uid }
  })
}

// Email and Password Login
// const actionCodeSettings = {
//   url: 'http://localhost:3000',
//   handleCodeInApp: true,
// }
// const sendLoginLinkToEmail = (email) => {
//   return sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
//     window.localStorage.setItem('emailForSignIn', email)
//   })
// }

// const registerWithEmailAndPassword = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password).then((user) => {
//     console.log(user)
//   })
// }
// const loginWithEmailAndPassword = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password).then((user) => {
//     console.log(user)
//   })
// }

const logout = () => {
  return signOut(auth).then(() => {
    console.log('successfully logout')
  })
}

export {
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
  loginWithTwitter,
  // registerWithEmailAndPassword,
  // loginWithEmailAndPassword,
  // sendLoginLinkToEmail,
  logout,
}
