import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"

export default function App({nomeDestinatario, hora, data, valor, }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxInfo}>
                <Text style={styles.titleInfo}>Quem recebeu: </Text>
                <Text style={styles.info}>{nomeDestinatario}</Text>
            </View>

            <View style={styles.boxInfo}>
                <Text style={styles.titleInfo}>Data: </Text>
                <Text style={styles.info}>{data}</Text>
            </View>

            <View style={styles.boxInfo}>
                <Text style={styles.titleInfo}>Hora: </Text>
                <Text style={styles.info}>{hora}</Text>
            </View>

            <View style={styles.boxInfo}>
                <Text style={styles.titleInfo}>Valor: </Text>
                <Text style={styles.info}>{valor}</Text>
            </View>
        </View>
    )
}