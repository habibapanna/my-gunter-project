import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtxaLLhceyROF-hJr3I9a4N8dXPqdvk_w",
  authDomain: "my-gunter-project.firebaseapp.com",
  projectId: "my-gunter-project",
  storageBucket: "my-gunter-project.firebasestorage.app",
  messagingSenderId: "366744008363",
  appId: "1:366744008363:web:569c39682e169c897469ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;