import { useFocusEffect } from "@react-navigation/native";
import { Audio } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import timeImg from '../../assets/clock.png';

export default function Fraction({ label, onPress, imgSrc, available = true, isAlarm }) {
    const startValue = 1;
    const endValue = 1.1;
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(startValue));
    const [sound, setSound] = useState(new Audio.Sound());

    // Разобраться почему аудио через некоторое время пропадает

    useFocusEffect(React.useCallback(() => {

        if (isAlarm) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAnim,
                        {
                            toValue: endValue,
                            duration: 1000,
                            useNativeDriver: true,
                        }),
                    Animated.timing(fadeAnim,
                        {
                            toValue: startValue,
                            duration: 1000,
                            useNativeDriver: true,
                        })
                    ]), 
                {iterations: 1000}
            ).start((o) => {

                    if(o.finished) 
                      this.runAnimation();

            });
        }

    }, [isAlarm]));

    useEffect(() => {
        // loadSound();
        // return sound.unloadAsync;
    }, [sound]);

    async function loadSound() {
        console.log("HEY!");
        await sound.loadAsync(
            require('../../assets/sounds/anvilSound.mp3'),
        );
    }

    // async function playSound() {
    //     console.log('Loading Sound');
    //     const { sound } = await Audio.Sound.createAsync(
    //        require('../../assets/sounds/anvilSound.mp3')
    //     );
    //     setSound(sound);
    
    //     console.log('Playing Sound');
    //     await sound.playAsync(); 
    // } 

    async function onPressFraction() {
        // await sound.playAsync();
        onPress();
    }
    
    // useEffect(() => {
    //     return sound
    //         ? () => {
    //             console.log('Unloading Sound');
    //             sound.unloadAsync(); }
    //         : undefined;
    // }, [sound]);

    return (
        (available ?
            <Animated.View style={{transform: [{scale: fadeAnim}]}}>
                <TouchableOpacity 
                    style={styles.container} 
                    onPress={onPressFraction}
                >
                    <Image style={[styles.img, isAlarm ? styles.imgAlarm : {}]} source={imgSrc}/>
                    <Text style={styles.text}>{label}</Text>
                </TouchableOpacity>
            </Animated.View>
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
        justifyContent: 'center',
    },
    img: {
        height: Dimensions.get('window').height / 6,
        width: Dimensions.get('window').height / 6,
        // height: 150,
        // width: 150,
        // resizeMode: 'contain',
        // aspectRatio: 1
    },
    imgAlarm: {
        backgroundColor: 'red',
        borderRadius: 100
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});