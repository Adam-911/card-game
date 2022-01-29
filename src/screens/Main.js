import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Fraction from '../components/Fraction';
// import vikingImg from '../../assets/viking.png';
// import drott from '../../assets/drott.png'
// import bondImg from "../../assets/bond.png"
// import thraelImg from "../../assets/thrael.png"

function Main({ 
    navigation, 
    selectFraction,
    warriorImg,
    drottImg,
    bondImg,
    thraelImg 
}) {
    const goToDecision = (fraction) => {
        selectFraction(fraction);
        navigation.navigate("decision");
    }

    return (
        <View style={styles.container}>
            <View style={[styles.row, { marginBottom: 20 }]}>
                <Fraction label='Воины' imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/>
                <Fraction label='Дроты' imgSrc={drottImg} onPress={() => goToDecision("drotts")}/>
                <Fraction label='Бонды' imgSrc={bondImg} onPress={() => goToDecision("bonds")}/>
            </View>
            <View style={styles.row}>
                <Fraction label='Трели' imgSrc={thraelImg} onPress={() => goToDecision("thraels")}/>
                <Fraction label='Викинги' imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/>
                <Fraction label='Викинги' imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/>
            </View>
        </View>
    ) 
}

const mapStateToProps = ({ rootState, images }) => {
    const { selectedFraction } = rootState; 
        const { 
            warriorImg,
            drottImg,
            bondImg,
            thraelImg 
        } = images;
    return { 
        selectedFraction,
        warriorImg,
        drottImg,
        bondImg,
        thraelImg 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectFraction: (selectedFraction) => {
            dispatch({
                type: 'CHANGE_FRACTION',
                payload: selectedFraction
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#2F4F4F',
    }, 
    row: {
        flexDirection: 'row',
    }
});