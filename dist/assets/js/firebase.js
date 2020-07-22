var firebaseConfig = {
  apiKey: "AIzaSyDuCtbIS3xZnZvCthHZRAXs35WU6vprLrQ",
  authDomain: "js-ecommerce-test-app.firebaseapp.com",
  databaseURL: "https://js-ecommerce-test-app.firebaseio.com",
  projectId: "js-ecommerce-test-app",
  storageBucket: "js-ecommerce-test-app.appspot.com",
  messagingSenderId: "237515494747",
  appId: "1:237515494747:web:f52a2ae4d5fb90223e367e",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
