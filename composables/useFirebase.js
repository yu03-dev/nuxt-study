import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPzFgRXbnoKOWsHHEEf8xo97bCs5SfYKI",
  authDomain: "nuxt-app-50b8b.firebaseapp.com",
  projectId: "nuxt-app-50b8b",
  storageBucket: "nuxt-app-50b8b.appspot.com",
  messagingSenderId: "125156959917",
  appId: "1:125156959917:web:ebe4f5121489de3750c824",
  measurementId: "G-K0ZVLYNR2Z",
};

// Initialize Firebase
export default function useFirebase() {
  if (getApps().length == 0) {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return { app, analytics };
  }
}
