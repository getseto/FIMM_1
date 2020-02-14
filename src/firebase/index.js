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


export const initFirebase = () => {
    return firebase.initializeApp(firebaseConfig);
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}
export const logIn = (history) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        localStorage.setItem('accessToken', JSON.stringify(result.credential.accessToken));
        localStorage.setItem('idToken', JSON.stringify(result.credential.idToken));
        localStorage.setItem('user', JSON.stringify(result.user));
        history.push('/table')

    }).catch(function (error) {
        console.error(error);
    });
}
export const logOut = (history) => {
    localStorage.clear();
    history.push('/login')
}
export const getEvents = async (firebaseApp) => {
    if (!firebaseApp) {
        return
    }
    const query = firebaseApp.firestore().collection('/event')
    const snapshot = await query.get()
    const events = snapshot.docs.map(
        doc => doc.data()
    )
    return events;
}

export const getAssistantsForEvent = async (firebaseApp, searchTerm = '', eventId = 'E92jBGTqn1DhuT26w2Qj') => {
    if (!firebaseApp) {
        return
    }
    let query = firebase.firestore().collection('/event').doc(eventId).collection('assistants')

    let snapshot
    if (searchTerm) {
        const data = (await query.where('firstName', '==', searchTerm).get()).docs.map(doc => doc.data())
        data.push(...(await query.where('lastName', '==', searchTerm).get()).docs.map(doc => doc.data()))
        data.push(...(await query.where('curp', '==', searchTerm).get()).docs.map(doc => doc.data()))
        data.push(...(await query.where('email', '==', searchTerm).get()).docs.map(doc => doc.data()))
        data.push(...(await query.where('phone', '==', searchTerm).get()).docs.map(doc => doc.data()))
        data.push(...(await query.where('cellphone', '==', searchTerm).get()).docs.map(doc => doc.data()))
        return data;
    } else {
        snapshot = await query.get()
        return snapshot.docs.map(
            doc => doc.data()
        )
    }
}
export const saveEvent = (event) => {
    const query = firebase.firestore().collection('/event')
    query.add(event)
}
export const updateEvent = (eventId, eventData) => {
    const query = firebase.firestore().collection('/event').doc(eventId)
    query.set(eventData)
  }
export const user = getUser();

export const editAssistant = (firebaseApp, assistant, eventId) => {
    const query = firebaseApp.firestore().collection('/event').doc(eventId).collection('assistants').doc(assistant.id);
    query.set(assistant)
}
