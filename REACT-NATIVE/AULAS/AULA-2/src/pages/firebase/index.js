import React, {useState}from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebaseConn from "../../services/firebaseConn"
import styles from "./styles"

export default function App(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const {signIn} = React.useContext(AuthContext);

    function login(username, password) {
        firebaseConn.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(error);
        });
    }
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            />

            <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntrys
            />  

            <Button
            title="Logar"
            onPress={()=>{login(username, password)}}
            />
        </View>
    )
}
