import firebase from "firebase";
 
const firebaseConfig = {
    apiKey: "AIzaSyC76l0q4xjGknl7VjmJSvVUfMgzjEWByqw",
    authDomain: "whatsappcloneforinspire.firebaseapp.com",
    projectId: "whatsappcloneforinspire",
    storageBucket: "whatsappcloneforinspire.appspot.com",
    messagingSenderId: "104891717895",
    appId: "1:104891717895:web:41bcd54bfd461b69e30da2"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;