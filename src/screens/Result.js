import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import testImg from '../../assets/viking.png';
import Button from "../components/Button";
import FractionResult from "../components/FractionResult";

function Result({ 
    navigation, 
    warriors, 
    drots, 
    bonds, 
    thraels, 
    gold,
    consequence, 
    changeFractionsPoints, 
    changeGoldPoints
}) {

    useEffect(() => {
        const newWarriorsPoints = warriors + consequence.warriors;
        const newDrotsPoints = drots + consequence.drots;
        const newBondsPoints = bonds + consequence.bonds;
        const newThraelsPoints = thraels + consequence.thraels;
        changeFractionsPoints({
            warriors: newWarriorsPoints, 
            drots: newDrotsPoints, 
            bonds: newBondsPoints, 
            thraels: newThraelsPoints
        });

        if (consequence.gold) {
            const newGoldPoints = gold + consequence.gold;
            changeGoldPoints(newGoldPoints);
        }

    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.fractionsWrapper}>
                <FractionResult points={warriors} result={consequence.warriors} fraction="warriors"/>
                <FractionResult points={drots} result={consequence.drots} fraction="drotts"/>
                <FractionResult points={bonds} result={consequence.bonds} fraction="bonds"/>
                <FractionResult points={thraels} result={consequence.thraels} fraction="thraels"/>
            </View>
            <Button label="ОК" color="green" onPress={() => {navigation.navigate('main')}}/>
        </View>
    ); 
}

const mapStateToProps = ({ rootState, images }) => {
    const {
        warriors,
        drots,
        bonds,
        thraels,
        gold,
        consequence
    } = rootState;
    return { 
        warriors,
        drots,
        bonds,
        thraels,
        gold,
        consequence,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFractionsPoints: (newFractionsPoints) => {
            dispatch({
                type: "CHANGE_FRACTIONS_POINTS",
                payload: newFractionsPoints
            });
        },
        changeGoldPoints: (newGoldPoints) => {
            dispatch({
                type: "CHANGE_GOLD_POINTS",
                payload: newGoldPoints
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#2F4F4F', 
    },
    fractionsWrapper: {
        flex: 0.5,
        justifyContent: 'space-between',
        // alignItems: 'flex-start'
    }
});