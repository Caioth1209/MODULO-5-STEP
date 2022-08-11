import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from "./styles"

export default function App(){

    const [num, setNum] = useState(0);

    function add(){
        setNum(num + 1);
    }

    function subtract(){
        setNum(num - 1);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>{num}</Text>

            <View style={styles.boxCont}>
                <TouchableOpacity
                onPress={()=> subtract()}
                style={styles.input}
                >
                    <Text 
                    style={styles.buttonText}>
                        -
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> add()}
                style={styles.input}
                >
                    <Text 
                    style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}