import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RoundButton from "../components/RoundButton";

export default function MainMenu({ navigation }) {
    const [sound, setSound] = useState(new Audio.Sound());

    useEffect(() => {
        loadSound();
        return sound.unloadAsync;
    }, [sound]);

    async function loadSound() {
        console.log("HEY!");
        await sound.loadAsync(
            require('../../assets/sounds/anvilSound.mp3'),
        );
    }

    const onPress = async () => {
        await sound.playAsync();
        navigation.navigate('main');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>SAGA</Text>
            <RoundButton onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E3D3D'
    },
    text: {
        fontFamily: 'Skranji-Regular',
        fontSize: 100,
        color: 'white'
    }
});