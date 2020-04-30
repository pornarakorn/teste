import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app

var firebaseConfig = {
  apiKey: "AIzaSyBj-MR1KDqxIJBUuxmoV_SnywRGhkjThws",
  authDomain: "egco427firebase-ffebf.firebaseapp.com",
  databaseURL: "https://egco427firebase-ffebf.firebaseio.com",
  projectId: "egco427firebase-ffebf",
  storageBucket: "egco427firebase-ffebf.appspot.com",
  messagingSenderId: "461452489897",
  appId: "1:461452489897:web:e82736c31e499e977125b8"
};
firebase.initializeApp(firebaseConfig);
window.firebase = firebase

firebase.auth().onAuthStateChanged((user) =>{
  if(!app){
    app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

  }
})

