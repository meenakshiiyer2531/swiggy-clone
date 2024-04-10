import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDxiIPim2bF1vs9HGPYerKv1DOWmp3qDFc",
  authDomain: "swiggy-clone-9958f.firebaseapp.com",
  projectId: "swiggy-clone-9958f",
  storageBucket: "swiggy-clone-9958f.appspot.com",
  messagingSenderId: "444335205146",
  appId: "1:444335205146:web:ff5ad16e55906f5a08daa3",
  measurementId: "G-CP8TX1KB6Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)