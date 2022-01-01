        // Import the functions you need from the SDKs you need
        import {
            initializeApp
        } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
        import {
            getAnalytics
        } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyBeOEuEKJ6RIxlYjUyAyImN6dp63zvAE4k",
            authDomain: "f2e-final-16079.firebaseapp.com",
            projectId: "f2e-final-16079",
            storageBucket: "f2e-final-16079.appspot.com",
            messagingSenderId: "717088954690",
            appId: "1:717088954690:web:7a3f336707928485cf10db",
            measurementId: "G-QY4TYEPS8K"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);