import React, {useState} from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Header from '../../components/home/header';
import Saldo from '../../components/home/saldo'
import styles from "./styles"

export default function App() {

    const [money, setMoney] = useState("0.0");

    return (
        <SafeAreaView style={styles.container}>
            <Header
            handleAddButton={setMoney}
            moneyQuantity={money}
            />
            <Saldo
                saldo={money}/>
        </SafeAreaView>
    )
}