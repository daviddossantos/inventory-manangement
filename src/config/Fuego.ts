import firebase from 'firebase/app';
import 'firebase/storage';

type Config = Parameters<typeof firebase.initializeApp>[0];

const firebaseConfig = {
  apiKey: 'AIzaSyBsLF3t9ekEb-wj6PT5tm3iZGD1PqjsLuM',
  authDomain: 'fir-with-react-93a7a.firebaseapp.com',
  databaseURL: 'https://fir-with-react-93a7a.firebaseio.com',
  projectId: 'fir-with-react-93a7a',
  storageBucket: 'fir-with-react-93a7a.appspot.com',
  messagingSenderId: '921636823703',
  appId: '1:921636823703:web:a4f8c7aeaede4fa9c6bfd2',
  measurementId: 'G-4EL4YGC9BD',
};

class Fuego {
  public db: ReturnType<firebase.app.App['firestore']>;
  public auth: typeof firebase.auth;
  public functions: typeof firebase.functions;
  public storage: typeof firebase.storage;
  constructor(config: Config) {
    this.db = !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore();
    this.auth = firebase.auth;
    this.functions = firebase.functions;
    this.storage = firebase.storage;
  }
}

const fuego = new Fuego(firebaseConfig);

export { fuego };
