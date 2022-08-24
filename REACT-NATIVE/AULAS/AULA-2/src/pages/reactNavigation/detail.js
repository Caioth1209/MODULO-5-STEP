import React from 'react';
import { Text, View, Button } from 'react-native';

export default function App({navigation, route}){

    const {name, valor, msg} = route.params;

    return (
        <View style={
            {
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Button
            title="Voltar"
            onPress={()=>{navigation.navigate("Home")}}/>
        </View>
    )
}