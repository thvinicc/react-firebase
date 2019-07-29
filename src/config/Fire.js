import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyAJ__mMbW_divMg2SOWJw5QtLcrYZ0wCXI',
  authDomain: 'usuarios-34cab.firebaseapp.com',
  databaseURL: 'https://usuarios-34cab.firebaseio.com',
  projectId: 'usuarios-34cab',
  storageBucket: 'usuarios-34cab.appspot.com',
  messagingSenderId: '954173988358'
};
const fire = firebase.initializeApp(config);
export default fire;
