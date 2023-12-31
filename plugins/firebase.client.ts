import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const firebaseConfig = config.public;

  const app = initializeApp({ ...firebaseConfig });
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return {
    provide: {
      auth: auth,
      firestore: firestore,
    },
  };
});
