import React from 'react';
import styles from "./styles"
import { Text, View } from 'react-native';

export default function App(props) {
    return (
        <View style={styles.container}>
            <View style={styles.boxSaldo}>
                <Text style={styles.saldoTitulo}>SEU SALDO:</Text>
                <Text style={styles.saldoDinheiro}>R$ {props.saldo}</Text>
            </View>
        </View>
    )
}