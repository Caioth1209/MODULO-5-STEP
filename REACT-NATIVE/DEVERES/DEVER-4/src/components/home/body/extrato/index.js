import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"

export default function App({nomeRemetente, hora, data, valor, }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxTitulos}>
                <Text style={styles.titleNomeRemetente}>Quem enviou: </Text>
                <Text style={styles.titleData}>Data:</Text>
                <Text style={styles.titleHora}>Hora: </Text>
                <Text style={styles.titleValor}>Valor: </Text>
            </View>

            <View style={styles.boxInfo}>
                <Text style={styles.nomeRemetente}>{nomeRemetente}</Text>
                <Text style={styles.data}>{data}</Text>
                <Text style={styles.valor}>{hora}</Text>
                <Text style={styles.valor}>{valor}</Text>
            </View>
        </View>
    )
}