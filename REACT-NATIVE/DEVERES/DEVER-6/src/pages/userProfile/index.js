import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Profile from '../../components/userProfile/profile'
import styles from "./styles"

export default function App({navigation, route}) {

    const {imgUrl, name, age} = route.params;

    return (
        <View style={styles.container}> 
            <Profile
            imgUrl={imgUrl}
            name={name}
            age={age}/>
        </View>
    )
}