import React from 'react'
import { Text, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Count from "../count"
import FlatList from "../flatList"
import BottomNav from "../bottomNavigation"


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

const Drawer = createDrawerNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Drawer.Navigator
            initialRouteName="Home"
            >
                <Drawer.Screen
                name="Home"
                component={HomeScreen}
                />
                <Drawer.Screen
                name="List"
                component={FlatList}
                />
                <Drawer.Screen
                name="Count"
                component={Count}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}