import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
// import { AppLoading } from 'expo';
import { Audio } from 'expo-av';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import StackNavigation from './src/navigation/StackNavigation'
import store from './src/store';

async function loadApp() {
    await Font.loadAsync({
        'NordicAlternativeRegular': require('./assets/fonts/Nordic-Alternative-Regular.ttf'),
        'Skranji-Regular': require('./assets/fonts/Skranji-Regular.ttf'),
    });
}   

export default function App() {
    const [sound, setSound] = useState();
    const [appIsReady, setAppIsReady] = useState(false);

    async function playSound() {
        
        const { sound } = await Audio.Sound.createAsync(
           require('./assets/sounds/bgMusic.mp3')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); 
    } 
    
    useEffect(() => {
        playSound();
    }, []);

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);

    if (!appIsReady) {
        return (
            <AppLoading
                startAsync={loadApp}
                onError={err => console.log(err)}
                onFinish={() => setAppIsReady(true)}
            />
        )
    } else {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <StackNavigation/>
                </NavigationContainer>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
