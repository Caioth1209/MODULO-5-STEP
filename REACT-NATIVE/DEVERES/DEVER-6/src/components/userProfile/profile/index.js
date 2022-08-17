import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from "./styles"

export default function App(props) {
    return (
        <View style={styles.container}>
            <View style={styles.boxImg}>
                <Image
                source={{uri: props.imgUrl}}
                style={styles.img}/>
            </View>

            <View style={styles.boxInfo}>
                <Text 
                style={styles.textInfo}>{props.name}</Text>

                <Text 
                style={styles.textInfo}>{props.age}</Text>
            </View>
        </View>
    )
}