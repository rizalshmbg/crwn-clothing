// Import the functions you need from the SDKs you need
import { async } from '@firebase/util'
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDx-m-ac5v5W7TebJ5RCnr6MwacMNA_S_w',
	authDomain: 'crwn-clothing-db-bfe30.firebaseapp.com',
	projectId: 'crwn-clothing-db-bfe30',
	storageBucket: 'crwn-clothing-db-bfe30.appspot.com',
	messagingSenderId: '965924974063',
	appId: '1:965924974063:web:8379ae1bb8ca529458da1a',
}

// Initialize Firebase
const fireabaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)

	// if users data does not exists
	// create / set the document with the data from userAuth in my collection

	// if users data exists
	// return userDocRef
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}
