import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    let pArmy = 250;
    return(
        <View>
            <Text style={styles.textStyle}>pArmy: {pArmy}</Text>
        </View>
    );
} 


const styles = StyleSheet.create({
    textStyle: {
        color: 'white'
    }
})