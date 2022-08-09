import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from "./styles"

export default function Header({numero, name, minhaFuncao}) {
  return (
    <View style={styles.container}>
        {/* <Button 
        title="clica"
        onPress={minhaFuncao}/> */}
        <Text>{name}</Text>
        <Text>{numero}</Text>
    </View>
  );
}