import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDSzQqsO-fObrEiZFMUySsEDbdfTrWeKHk',
	authDomain: 'clone-7128a.firebaseapp.com',
	projectId: 'clone-7128a',
	storageBucket: 'clone-7128a.appspot.com',
	messagingSenderId: '237121231858',
	appId: '1:237121231858:web:1eebc9c7fdb0b89acf696b'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
