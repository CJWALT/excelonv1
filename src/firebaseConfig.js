import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBIg-nf7byR8z2IB0hV1FPOm6DVfP4bV1M",
  authDomain: "excelon-handleemail.firebaseapp.com",
  projectId: "excelon-handleemail",
  storageBucket: "excelon-handleemail.appspot.com",
  messagingSenderId: "552039118808",
  appId: "1:552039118808:web:3a2ab8ae5adc85f005e4ad",
  measurementId: "G-KNMEFR1CV3"
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export { functions };