import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBHKraJmeK6mgK4bCSPvt9EJH6qZxK0Mw",
    authDomain: "vidyaastra-8e1d6.firebaseapp.com",
    projectId: "vidyaastra-8e1d6",
    storageBucket: "vidyaastra-8e1d6.firebasestorage.app",
    messagingSenderId: "1066429299600",
    appId: "1:1066429299600:web:4a902d4d250b93b4831115",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Authentication and Providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Export the auth service and providers for use in other components
export { auth, googleProvider, githubProvider };