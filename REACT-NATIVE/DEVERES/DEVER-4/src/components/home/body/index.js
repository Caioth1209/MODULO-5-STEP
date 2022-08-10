import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import Extrato from "./extrato"
import styles from "./styles"


const DATA = [
    {
        id: "1",
        nomeDestinatario: "Luiz Fernando Collor",
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 140,00"
    },
    {
        id: "2",
        nomeDestinatario: "Caio da Luz",
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 750,00"
    },
    {
        id: "3",
        nomeDestinatario: "Pedro Dos Santos",
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 50,00"
    },
    {
        id: "4",
        nomeDestinatario: "Felipe Dos Santos Vieira de Compostela",
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 20,00"
    },
    {
        id: "5",
        nomeDestinatario: "Lucas alvim dos santos",
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 350,00"
    },
];

export default function App() {

    const renderItem = ({ item }) => (
        <Extrato 
        nomeDestinatario={item.nomeDestinatario}
        data={item.data}
        hora={item.hora}
        valor={item.valor}/>
    );

    return (
        <SafeAreaView style={styles.container}> 
            <Text style={styles.titleExtrato}>Extrato</Text>
            <FlatList
            style={styles.listaExtrato}
            maxToRenderPerBatch={4}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}