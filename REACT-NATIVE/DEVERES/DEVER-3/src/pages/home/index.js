import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/home/header';
import Body from '../../components/home/body';
import styles from "./styles"

export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <Body/>
        </View>
    )
}