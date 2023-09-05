import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAPmIvZyXVfOeRyOlZ7Yv9pA0TRGyFakg",
  authDomain: "chat-app-5a51c.firebaseapp.com",
  projectId: "chat-app-5a51c",
  storageBucket: "chat-app-5a51c.appspot.com",
  messagingSenderId: "1065122485568",
  appId: "1:1065122485568:web:d6c32f67031bd802ee16a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
