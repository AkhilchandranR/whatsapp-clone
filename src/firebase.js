import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGDYMCXssI1VUDUOpQLcL0ULB09SZhw60",
    authDomain: "whatsapp-clone-993f4.firebaseapp.com",
    projectId: "whatsapp-clone-993f4",
    storageBucket: "whatsapp-clone-993f4.appspot.com",
    messagingSenderId: "762831997647",
    appId: "1:762831997647:web:506cd09710ecf5897f05ba"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;