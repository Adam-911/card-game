import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import timeImg from '../../assets/clock.png';

export default function Fraction({ label, onPress, imgSrc, available = true }) {
    console.log(available);

    return (
        (available ?
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image style={styles.img} source={imgSrc}/>
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        :
            <View style={styles.container}>
                <Image style={styles.img} source={timeImg}/>
                <Text style={styles.text}>{label}</Text>
            </View>
        )
    );
} 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 120,
        width: 120
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});