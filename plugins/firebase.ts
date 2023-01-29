import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let app;

if (!getApp()) {
  const firebaseConfig = {
    apiKey: "AIzaSyCxU4zoYac8-fphzfSJrb95iSW1EKslyRQ",
    authDomain: "samsportfolio-749ec.firebaseapp.com",
    databaseURL: "https://samsportfolio-749ec.firebaseio.com",
    projectId: "samsportfolio-749ec",
    storageBucket: "samsportfolio-749ec.appspot.com",
    messagingSenderId: "505881885196",
    appId: "1:505881885196:web:8071153f5e5bcb0f238c29",
  };
  app = initializeApp(firebaseConfig);
}

const database = getDatabase();

export { app, database };
