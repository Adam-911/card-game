import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import goldImg from '../../assets/coins.png';
import runeImg from '../../assets/rune.png';


function Header({ gold, move }) {
    return (
        <View style={styles.container}>
            <View style={styles.elementWrapper}>
                <Image style={styles.img} source={goldImg}/>
                <Text style={styles.text}>{" " + gold}</Text>
            </View>
            <View style={styles.elementWrapper}>
                <Image style={styles.img} source={runeImg}/>
                <Text style={styles.text}>{" " + move}</Text>
            </View>
        </View>
    )
}

const mapStateToProps = ({ rootState }) => {
    const { gold, move } = rootState;
    return { gold, move };
}

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
    container: {
        flex: 0.10,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#2F4F4F',
    },
    elementWrapper: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    img: {
        height: 25,
        width: 25
    }
});