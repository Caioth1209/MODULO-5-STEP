import React, {useState} from 'react';
import { Text, View, SafeAreaView, FlatList} from 'react-native';
import User from "../user";
import styles from "./styles"

export default function App(props) {

    const renderItem = ({ item }) => (
        <User
        name={item.name}
        age={item.age}
        imgUrl={item.imgUrl}
        navigation={props.navigation}/>
    )

    return (
        <SafeAreaView style={styles.container}> 
            <FlatList
            style={styles.listaUsers}
            data={props.lista}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}