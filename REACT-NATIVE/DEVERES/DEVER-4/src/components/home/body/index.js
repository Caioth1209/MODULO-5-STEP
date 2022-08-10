import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import Extrato from "./extrato"
import styles from "./styles"


const DATA = [
    {
        id: '1',
        nomeRemetente: 'Caio da Luz',
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 350,00"
    },
    {
        id: '2',
        nomeRemetente: 'Caio da Luz',
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 350,00"
    },
    {
        id: '3',
        nomeRemetente: 'Caio da Luz',
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 350,00"
    },
    {
        id: '4',
        nomeRemetente: 'Caio da Luz',
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 350,00"
    },
    {
        id: '5',
        nomeRemetente: 'Caio da Luz',
        data: "10/08/22",
        hora: "14:00:00",
        valor: "R$ 350,00"
    },
];

export default function App() {

    const renderItem = ({ item }) => (
        <Extrato 
        nomeRemetente={item.nomeRemetente}
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