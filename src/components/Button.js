import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ label, color = 'blue', onPress, gold }) {
    return(
        <TouchableOpacity 
          style={[styles.container, { backgroundColor: color }]}
          onPress={onPress}
        >
            <Text style={styles.text}>{label}</Text>
            {gold ? <Text style={styles.text}>{gold}</Text> : undefined}
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