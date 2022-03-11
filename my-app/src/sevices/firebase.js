// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
    createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
      signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwQnlB4vc9JjOq3YwFqvV8jwENkG1NSco",
  authDomain: "gb-stec.firebaseapp.com",
  projectId: "gb-stec",
  storageBucket: "gb-stec.appspot.com",
  messagingSenderId: "553278617366",
  appId: "1:553278617366:web:060972d6dab2dd31d10237",
  measurementId: "G-SGHQ1GEQLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const signUP = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logout =() => signOut(auth);
export const db = getDatabase(app);
export const chatDB = ref(db, "chats");

export const chatName = ref(db, "chats/name");
export const chatMsg = ref(db, "chats/msg");
//  export const chatId = ref(db, "chat/id");
export const getChatRefID = (chatID) => ref (db, `chats/${chatID}`);