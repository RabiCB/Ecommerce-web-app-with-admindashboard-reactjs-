import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDX5eZqkWO0cXR0BQBpfvQ1X7_yFbtsmg0",
    authDomain: "lanemania-61f6c.firebaseapp.com",
    projectId: "lanemania-61f6c",
    storageBucket: "lanemania-61f6c.appspot.com",
    messagingSenderId: "937186032223",
    appId: "1:937186032223:web:373b2c4073356510e6b9ea"
  };
const app=initializeApp(firebaseConfig)
export const auth=getAuth(app)
export default app;
