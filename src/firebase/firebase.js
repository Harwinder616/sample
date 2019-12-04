import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA_pZzlYMvHJlhiCeKVtm4dHDf_8eks_LM",
    authDomain: "display-app-e37e3.firebaseapp.com",
    databaseURL: "https://display-app-e37e3.firebaseio.com",
    projectId: "display-app-e37e3",
    storageBucket: "display-app-e37e3.appspot.com",
    messagingSenderId: "123906938486",
    appId: "1:123906938486:web:5a132aaa65ebecf187f157",
    measurementId: "G-9EKL9BVR3S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database=firebase.database();
  export{database as default};


/*const options=['karan','saga']

database.ref().set(null)

database.ref('expenses').push(
  options[0]


)
database.ref('expenses').push(
  options[1]


)


const expenses=[];
database.ref('expenses').on('value',(snapshot)=>{
  
  snapshot.forEach((child)=>{
    expenses.push(child.key);
    
     
      
   

  })
  database.ref('expenses/'+expenses[0]).set(null);
 
})


*/