import React from 'react';
import {Text, View, Button, TouchableOpacity,
TouchableHighlight} from 'react-native';
import styles from "./styles"

export default function App(){

    function getDatabaseId() {
        alert("Funcionando");
    }

    return (
        <View style={styles.container}>
           <Text>Funcionando</Text>

           <Button
           title="Meu primeiro botao"
           onPress={getDatabaseId}/>

           {/* <TouchableOpacity
            onPress={getDatabaseId}>
                <Text>Meu touchable</Text>
           </TouchableOpacity>

           <TouchableHighlight
            onPress={getDatabaseId}>
                <Text>Meu touchable</Text>
           </TouchableHighlight> */}
        </View>
    )
}