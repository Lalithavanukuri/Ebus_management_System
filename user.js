// Similar Firebase initialization as in script.js
// ...
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


// user.js

// ... (previous code)

function toggleForms() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm.style.display === 'block') {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    } else {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }
}

function registerUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Assume a 'users' collection in Firestore
    const usersCollection = firebase.firestore().collection('users');

    // Create a new user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        // Add user information to Firestore
        usersCollection.doc(user.uid).set({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
        .then(() => {
            console.log('User registered successfully');
            // Redirect or show success message
        })
        .catch((error) => {
            console.error('Error posting user information:', error);
            // Handle errors
        });
    })
    .catch((error) => {
        console.error('Error registering user:', error);
        // Handle errors
    });
}

function loginUser() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    .then((userCredential) => {
        console.log('User logged in successfully');
        // Redirect or show success message
    })
    .catch((error) => {
        console.error('Error logging in:', error);
        // Handle errors
    });
}

// user.js

// ... (previous code)

function searchBus() {
    const sourceLocation = document.getElementById('sourceLocation').value;
    const destinationLocation = document.getElementById('destinationLocation').value;

    // Assume a 'busLocations' collection in Firestore
    const busLocationsCollection = firebase.firestore().collection('busLocations');

    // Query bus locations based on source and destination
    busLocationsCollection.where('source', '==', sourceLocation)
        .where('destination', '==', destinationLocation)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                document.getElementById('busLocationResult').innerHTML = 'No buses found for the given route.';
            } else {
                let resultHtml = '<h3>Bus Locations:</h3>';
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    resultHtml += `<p>Bus ID: ${doc.id}, Current Location: ${data.currentLocation}</p>`;
                });
                document.getElementById('busLocationResult').innerHTML = resultHtml;
            }
        })
        .catch((error) => {
            console.error('Error searching bus location:', error);
            // Handle errors
        });
}

// ... (remaining code)
// user.js

// ... (previous code)

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User logged in:', user);
            // Redirect to the dashboard or other appropriate page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
            // Handle errors (e.g., show error message to the user)
        });
}

// ... (remaining code)







// Search bus location function--------------old
function searchBusLocation() {
    // Collect source and destination from the user
    const source = prompt('Enter source location:');
    const destination = prompt('Enter destination location:');
  
    // Use Firebase Firestore to search for bus location
    firebase.firestore().collection('busDetails')
      .where('source', '==', source)
      .where('destination', '==', destination)
      .get()
      .then((querySnapshot) => {
        const resultDiv = document.getElementById('busLocationResult');
        resultDiv.innerHTML = ''; // Clear previous results
        querySnapshot.forEach((doc) => {
          const busDetails = doc.data();
          // Display bus details (append to resultDiv)
        });
        // Handle no results or show message
      })
      .catch((error) => {
        console.error('Error searching bus location:', error);
        // Handle search error
      });
  }
  