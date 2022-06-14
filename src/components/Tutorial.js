import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import questionIcon from '../../assets/question-sign.png';

export default function Tutorial() {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={questionIcon}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 25
    },
    image: {
        height: 30,
        width: 30,
        tintColor: '#263f3f',
    }
});