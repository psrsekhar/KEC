import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCZYPvdrfGYOGFEYYGDzZpHcqmN-RuE6E",
  authDomain: "kec-profile.firebaseapp.com",
  projectId: "kec-profile",
  storageBucket: "kec-profile.appspot.com",
  messagingSenderId: "229241047644",
  appId: "1:229241047644:web:81652608adc99a09a6b499",
  measurementId: "G-143009JWHF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
