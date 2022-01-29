import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ label, color = 'blue', onPress }) {
    return(
        <TouchableOpacity 
          style={[styles.container, { backgroundColor: color }]}
          onPress={onPress}
        >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});