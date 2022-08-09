import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.boxSaldo}>
                <Text style={styles.saldoTitulo}>SEU SALDO:</Text>
                <Text style={styles.saldoDinheiro}>R$ 33.33</Text>
            </View>
        </View>
    )
}