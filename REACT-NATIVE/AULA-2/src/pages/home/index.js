import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from "./styles"
import Header from "../../components/home/header"
import Body from "../../components/home/body"
import Footer from "../../components/home/footer"


export default function Home() {

  function minhaFuncao() {
    alert('teste');
  }
  return (
    <View style={styles.container}>
        {/* <Button 
        title="Clique aqui"
        color="red"
        onPress={()=> alert("oi")}/> */}
        <Header
        minhaFuncao={minhaFuncao}
        name="caio"
        numero={10}
        />

        <Body 
        numero={10}
        />

        <Footer
        numero={10}
        />
    </View>
  );
}