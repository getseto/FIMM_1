import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}
export const logIn = () => {
    firebase.initializeApp(firebaseConfig);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        localStorage.setItem('accessToken', JSON.stringify(result.credential.accessToken));
        localStorage.setItem('idToken', JSON.stringify(result.credential.idToken));
        localStorage.setItem('user', JSON.stringify(result.user));
    }).catch(function(error) {
        console.error(error);
    });
}
export const logOut = () => {
    localStorage.clear();
}
export const getEvents = () => {
    firebase.initializeApp(firebaseConfig);
    const query = firebase.firestore().collection('/event')

    query.onSnapshot((snapshot) => {
        return snapshot;
    })
}