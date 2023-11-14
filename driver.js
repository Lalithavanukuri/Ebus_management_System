// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlK_eCG5IlMCdLa-Mc0zMgFWJbzxyZ2JY",
  authDomain: "gym-management-c1da7.firebaseapp.com",
  projectId: "gym-management-c1da7",
  storageBucket: "gym-management-c1da7.appspot.com",
  messagingSenderId: "484090765287",
  appId: "1:484090765287:web:27d4bda0b27d8fb248a742",
  measurementId: "G-XY384N1TZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function driverLogin() {
    const username = document.getElementById('driverUsername').value;
    const password = document.getElementById('driverPassword').value;

    // Implement Firebase authentication logic here
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // User logged in successfully
            const user = userCredential.user;
            console.log('Login successful:', user.uid);
            // Redirect to the dashboard or another page
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
        });
}

// driver.js

// ... (previous code)

function postBusInfo() {
    const busNumber = document.getElementById('busNumber').value;
    const busType = document.getElementById('busType').value;
    const contactDetails = document.getElementById('contactDetails').value;

    // Assume a 'buses' collection in Firestore
    const busesCollection = firebase.firestore().collection('buses');

    // Add bus information to Firestore
    busesCollection.add({
        busNumber: busNumber,
        busType: busType,
        contactDetails: contactDetails
    })
    .then((docRef) => {
        console.log('Bus information posted with ID:', docRef.id);
        // Redirect or show success message
    })
    .catch((error) => {
        console.error('Error posting bus information:', error);
        // Handle errors
    });
}
// driver.js

// ... (previous code)

function postBusType() {
    const busNumber = document.getElementById('busNumber').value;
    const busType = document.getElementById('busType').value;

    // Assume a 'busTypes' collection in Firestore
    const busTypesCollection = firebase.firestore().collection('busTypes');

    // Add bus type information to Firestore
    busTypesCollection.doc(busNumber).set({
        busType: busType
    })
    .then(() => {
        console.log('Bus type posted successfully');
        // Redirect or show success message
    })
    .catch((error) => {
        console.error('Error posting bus type:', error);
        // Handle errors
    });
}
// driver.js

// ... (previous code)

function postContact() {
    const driverName = document.getElementById('driverName').value;
    const driverContact = document.getElementById('driverContact').value;

    // Assume a 'driverContacts' collection in Firestore
    const driverContactsCollection = firebase.firestore().collection('driverContacts');

    // Add driver contact information to Firestore
    driverContactsCollection.doc(driverName).set({
        driverContact: driverContact
    })
    .then(() => {
        console.log('Driver contact posted successfully');
        // Redirect or show success message
    })
    .catch((error) => {
        console.error('Error posting driver contact:', error);
        // Handle errors
    });
}
