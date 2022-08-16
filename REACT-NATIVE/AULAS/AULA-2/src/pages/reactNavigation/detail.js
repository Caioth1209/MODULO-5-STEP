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
            <Text>Detail {name}</Text>
            <Text>Detail {valor}</Text>
            <Text>Detail {msg}</Text>
            <Button
            title="Button"
            onPress={()=>{navigation.navigate("Home")}}/>
        </View>
    )
}