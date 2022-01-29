import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import vikingImg from '../../assets/viking.png';

export default function Fraction({ label, onPress, imgSrc }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={imgSrc}/>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
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