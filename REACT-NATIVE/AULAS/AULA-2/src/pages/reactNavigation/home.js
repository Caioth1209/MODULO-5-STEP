import React from 'react';
import { Text, View, Button } from 'react-native';

export default function App({navigation}){
    return (
        <View style={
            {
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Text>Home</Text>
            <Button
            title="Button"
            onPress={()=>{navigation.navigate("Detail", {
                name: "Alan",
                valor: 10,
                msg: "Veio de outra pagina"
            })}}/>
        </View>
    )
}