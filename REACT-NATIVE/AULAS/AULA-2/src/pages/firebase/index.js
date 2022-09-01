import React, {useState}from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from "../../services/firebaseConn"
import styles from "./styles"

export default function App(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const {signIn} = React.useContext(AuthContext);

    function create(email,password){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("Usuario criado com sucesso!");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }

    function login(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user);
            console.log("Email e senha validos");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
        });
    }

    function logout(){
        firebase.auth().signOut().then(() => {
            console.log("Logout com sucesso");
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            />

            <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntrys
            />  

            <Button
            title="Criar usuario"
            onPress={()=>{create(email, password)}}
            />  

            <Button
            title="Logar"
            onPress={()=>{login(email, password)}}
            />

            <Button
            title="Logout"
            onPress={()=>{logout()}}
            />
        </View>
    )
}
