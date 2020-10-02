import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import vikingImg from '../assets/vikingLogo.png';
import imgGoods from '../assets/llittleViking.png';
import imgWarrior from '../assets/warriorViking.png';

export default function FractionsView({onOpen}) {
    return(
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={ () => onOpen('army') } style={styles.viewCell}>
                    <Image source={vikingImg} style={styles.imgStyleViiking}/>
                    <Text style={styles.textStyle}>Viking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => onOpen('gods') } style={styles.viewCell}>
                    <Image source={imgGoods} style={styles.imgStyleViiking}/>
                    <Text style={styles.textStyle}>Gods</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewCell}>
                    <Image source={imgWarrior} style={styles.imgStyleViiking}/>
                    <Text style={styles.textStyle}>Gods</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.viewCell}>
                    <Image source={vikingImg} style={styles.imgStyleViiking}/>
                    <Text style={styles.textStyle}>Viking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewCell}>
                    <Image source={vikingImg} style={styles.imgStyleViiking}/>
                    <Text style={styles.textStyle}>Viking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewCell}>
                    <Image source={vikingImg} style={styles.imgStyleViiking}/>
                    <Text style={styles.textStyle}>Viking</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.textStyle}>Выберите какого рода вопросы вы сегодня решаете</Text>
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    imgStyleViiking: {
        width: 100,
        height: 100,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewCell: {
        alignItems: 'center',
        margin: 10,
    },
    textStyle: {
        color: 'white'
    }
});