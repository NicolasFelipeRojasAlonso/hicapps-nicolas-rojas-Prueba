
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDeP5qFnoaVDEuLGCd55FtrSd2lJ98yi-c",
  authDomain: "hicapps-nicolas-rojas.firebaseapp.com",
  databaseURL: "https://hicapps-nicolas-rojas-default-rtdb.firebaseio.com",
  projectId: "hicapps-nicolas-rojas",
  storageBucket: "hicapps-nicolas-rojas.appspot.com",
  messagingSenderId: "854544183675",
  appId: "1:854544183675:web:d8cbb5cc750daeba098dde",
  measurementId: "G-VDTB4T2H4S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database;


