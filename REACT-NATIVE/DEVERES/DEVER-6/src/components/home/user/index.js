import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles"

export default function App(props) {

    return (
        <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate("User Profile", {
                    imgUrl: props.imgUrl,
                    name: props.name,
                    age: props.age
                })
            }}
            style={styles.buttonContainer}
        >
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
        </TouchableOpacity>
    )
}