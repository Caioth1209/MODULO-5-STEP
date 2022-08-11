import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity
, TextInput} from "react-native";
import styles from "./styles"

export default function App() {

    const [name, setName] = useState("Caio");
    const [num, setNum] = useState(1)
    const [arr, setArr] = useState([]);

    // array vazio, quando o componente nascer
    useEffect(()=>{
        setName("Digite seu nome");
    }, [])

    // array com estado dentro, quando a variavel de estado mudar de valor
    useEffect(()=>{
        console.log(`Estado: ${name}`);
    }, [name])

    return (
        <View style={styles.container}>
            <Text>{name}</Text>

            <TouchableOpacity
            onPress={() => setName}>
                <Text>Mudar de nome</Text>
            </TouchableOpacity>

            <TextInput
            style={styles.input}
            onChangeText={setName}
            />
        </View>
    )
}
