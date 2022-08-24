import React from 'react'
import { Text, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

function HomeScreen({navigation}){
    return (
        <View style={
            {
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Text>Home</Text>
        </View>
    )
}

function DetailScreen({navigation, route}){

    return (
        <View style={
            {
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Text>DetailScreen</Text>
        </View>
    )
}

function ProfileScreen({navigation, route}){

    return (
        <View style={
            {
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <Text>ProfileScreen</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="Home"
                component={HomeScreen}
                />
                <Tab.Screen
                name="Detail"
                component={DetailScreen}
                />
                <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}