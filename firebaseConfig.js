// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDX2XpBEJjLu9lD1T0DWRTywfdI62tld1o",
  authDomain: "test-app-947f6.firebaseapp.com",
  projectId: "test-app-947f6",
  storageBucket: "test-app-947f6.firebasestorage.app",
  messagingSenderId: "773843171683",
  appId: "1:773843171683:web:21bef7b7250efdf7217b56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default app;
