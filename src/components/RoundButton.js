import React from "react";
import { View, Pressable, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function RoundButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPressIn={onPress}>
            <View style={styles.content}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#355247',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 40,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderLeftColor: 'transparent',
        transform: [{ rotate: "90deg" }],
        marginLeft: 7,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: -8,            
        },
        shadowOpacity: 0.46,
        shadowRadius: 2.14,
    }
});