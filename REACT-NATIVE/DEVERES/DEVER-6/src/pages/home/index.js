import React, {useState} from 'react';
import { Text, View } from 'react-native';
import ListUsers from "../../components/home/listUsers"
import styles from "./styles"

const USERS = [
    {
        id: "1",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/5080/5080067.png",
        name: "Luiz Fernando",
        age: "20 anos"
    },
    {
        id: "2",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/5080/5080067.png",
        name: "Pedro Alves",
        age: "25 anos"
    },
    {
        id: "3",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/5080/5080067.png",
        name: "Caio Araujo da Luz",
        age: "18 anos"
    },
    {
        id: "4",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/5080/5080067.png",
        name: "Lucas Almeida",
        age: "45 anos"
    },
    {
        id: "5",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/5080/5080067.png",
        name: "Felipe Rosman",
        age: "16 anos"
    },
    {
        id: "6",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/5080/5080067.png",
        name: "Lucia Alves",
        age: "20 anos"
    },
];

export default function App({navigation}) {
    return (
        <View style={styles.container}> 
            <ListUsers
            lista={USERS}
            navigation={navigation}/>
        </View>
    )
}