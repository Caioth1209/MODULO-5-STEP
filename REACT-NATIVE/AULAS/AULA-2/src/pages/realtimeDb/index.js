import React, {useState}from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from "../../services/firebaseConn"
import styles from "./styles"

export default function App(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users').set({
          username: name,   
          email: email,
          profile_picture : imageUrl
        });
    }

    function read(){
        var starCountRef = firebase.database().ref('users');
        starCountRef.on('value', (snapshot) => {
            const email = snapshot.val().email;
            console.log(email);
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
            title="Criar no banco"
            onPress={()=>{writeUserData("01", "alan", "email", "imageUrl")}}
            />  

            <Button
            title="Ler no banco"
            onPress={()=>{read()}}
            />  
        </View>
    )
}
