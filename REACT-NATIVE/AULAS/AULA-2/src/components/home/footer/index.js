import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"

export default function App({numero}) {
  return (
    <View style={styles.container}>
      <Text>Footer: {numero}</Text>
    </View>
  );
}