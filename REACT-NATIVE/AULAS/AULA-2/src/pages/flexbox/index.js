import React from 'react';
import {Text, View} from 'react-native';
import styles from "./styles"

export default function App(){
    return (
        <View style={styles.container}>
            {/* <View style={styles.box1}>
                <Text>Box 1 - HEADER</Text>
            </View>
            <View style={styles.box2}>
                <Text>Box 2 - BODY</Text>
            </View>
            <View style={styles.box3}>
                <Text>Box 3 - FOOTER</Text>
            </View> */}

           <View style={styles.box1}>
                <View style={styles.boxInterno}>
                    <Text>Box interno 01</Text>
                </View>
                <View style={styles.boxInterno}>
                    <Text>Box interno 02</Text>
                </View>
            </View>
        </View>
    )
}