import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles"

export default function App(props) {

    function addMoney(quantityAdded){
        return parseFloat(props.moneyQuantity) + quantityAdded;
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxImg}>
                <Image
                source={{uri: "https://cdn-icons-png.flaticon.com/512/5080/5080067.png"}}
                style={styles.img}/>
            </View>

            <View style={styles.boxInfo}>
                <Text 
                style={styles.textInfo}>CAIO ARAUJO DA LUZ</Text>

                <Text 
                style={styles.textInfo}>174.851.637-01</Text>

                <TouchableOpacity
                style={styles.buttonAdd}
                onPress={()=>{props.handleAddButton(addMoney(30))}}>
                    <Text
                    style={styles.textButton}>
                        ADD
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}