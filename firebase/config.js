// Firebase web config for the Deutsch-Lernspiel app.
//
// These keys are PUBLIC client identifiers — it is normal and safe to ship them
// in a static page. Real protection comes from the Realtime Database security
// rules (see ../database.rules.json), NOT from hiding these values.
//
// Loaded as a plain <script> before backend.js, which reads window.FIREBASE_CONFIG.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCYBcdGn2b1gj6GDzRUMRvBA1FzSGkmPX4",
  authDomain: "deutsch-cd8a6.firebaseapp.com",
  // Realtime Database URL. Region suffix depends on where you created the DB:
  //   europe-west1 ->  https://deutsch-cd8a6-default-rtdb.europe-west1.firebasedatabase.app
  //   us-central1  ->  https://deutsch-cd8a6-default-rtdb.firebaseio.com
  // CONFIRM the exact value shown on the Realtime Database page and fix it here.
  databaseURL: "https://deutsch-cd8a6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deutsch-cd8a6",
  storageBucket: "deutsch-cd8a6.firebasestorage.app",
  messagingSenderId: "46833990842",
  appId: "1:46833990842:web:e61de651245a3cc0fa5683",
  measurementId: "G-FD6873R06Q"
};
