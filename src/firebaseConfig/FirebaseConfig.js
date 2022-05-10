import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfMLaKw3ZXMKEyYf8PW_syjOOheveIuFk",
  authDomain: "tic-toc-toe-745fe.firebaseapp.com",
  projectId: "tic-toc-toe-745fe",
  storageBucket: "tic-toc-toe-745fe.appspot.com",
  messagingSenderId: "761969542770",
  appId: "1:761969542770:web:d0f5744a44ffca30c1e4eb",
  measurementId: "G-LGNZ4025GL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const Auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider();
export { Auth, Provider };
export default { firebaseApp };
