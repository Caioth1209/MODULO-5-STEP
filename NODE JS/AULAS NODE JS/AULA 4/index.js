const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyAx8DS-2JR0ypbKXsAxSKA3eucXN6111qQ",
  authDomain: "aula4nodedb.firebaseapp.com",
  projectId: "aula4nodedb",
  storageBucket: "aula4nodedb.appspot.com",
  messagingSenderId: "295674346514",
  appId: "1:295674346514:web:183a209106fc0c9bc82ccb",
  measurementId: "G-1L0B8VWRNE"
};

// comunicando com o banco para iniciar.
firebase.initializeApp(firebaseConfig);

function createDataInRealTime() {
    // ativando o prototype no firebase
    let students = firebase.database().ref("alunos");

    students.push(
        {
            name: "Caio",
            idade: 17
        }
    )
}

function readStudentsInRealTime() {
    firebase.database().ref("alunos").on("value",(snapshot)=>{
        snapshot.forEach((childItem)=>{
            let data = {
                key: childItem.key,
                name: childItem.val().name,
                idade: childItem.val().idade
            }

            console.log(data);
        });
    });
}

// createDataInRealTime();
readStudentsInRealTime();