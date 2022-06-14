import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import menuIcon from '../../assets/menu.png'

export default function ModalMenu() {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={menuIcon}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    image: {
        height: 30,
        width: 30,
        tintColor: '#263f3f',
    }
});