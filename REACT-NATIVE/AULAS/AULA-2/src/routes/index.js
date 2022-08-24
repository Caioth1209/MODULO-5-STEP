import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../pages/reactNavigation/home"
import DetailScreen from "../pages/reactNavigation/detail"

import { Text, TouchableOpacity} from "react-native"
 
const Stack = createNativeStackNavigator();

// roteador
export default function App(){
    return (
        // todas as telas precisam estar aqui para serem navegadas
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Pagina prinicipal",
                    headerStyle:{
                        backgroundColor: "orange"
                    },
                    headerTintColor: "white",
                    
                }}/>
                <Stack.Screen
                name="Detail"
                component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}