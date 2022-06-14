import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import Button from "../components/Button";
import FractionResult from "../components/FractionResult";

function Result({ 
    navigation, 
    warriors, 
    drotts, 
    bonds, 
    thraels, 
    gold,
    move,
    raidAvailabilityCounter,
    consequence, 
    changeFractionsPoints, 
    changeGoldPoints,
    changeMovePoints,
    changeRaidAvailabilityCounter
}) {
    const [goldLoss, setGoldLoss] = useState(-100);

    useEffect(() => {
        const newWarriorsPoints = warriors + consequence.warriors;
        const newDrottsPoints = drotts + consequence.drotts;
        const newBondsPoints = bonds + consequence.bonds;
        const newThraelsPoints = thraels + consequence.thraels;
        changeFractionsPoints({
            warriors: newWarriorsPoints, 
            drotts: newDrottsPoints, 
            bonds: newBondsPoints, 
            thraels: newThraelsPoints
        });

        if (consequence.gold)
            setGoldLoss((prev) => (prev + consequence.gold));

    }, []);

    const onPressOk = () => {
        navigation.navigate('main');
        changeMovePoints(++move);
        changeGoldPoints(gold + goldLoss);

        if (raidAvailabilityCounter !== 4) 
            changeRaidAvailabilityCounter(++raidAvailabilityCounter);

    }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>{goldLoss}</Text>
            </View>
            <View style={styles.fractionsWrapper}>
                <FractionResult points={warriors} result={consequence.warriors} fraction="warriors"/>
                <FractionResult points={drotts} result={consequence.drotts} fraction="drotts"/>
                <FractionResult points={bonds} result={consequence.bonds} fraction="bonds"/>
                <FractionResult points={thraels} result={consequence.thraels} fraction="thraels"/>
            </View>
            <Button label="ОК" color="green" onPress={onPressOk}/>
        </View>
    ); 
}

const mapStateToProps = ({ rootState }) => {
    const {
        warriors,
        drotts,
        bonds,
        thraels,
        gold,
        move,
        raidAvailabilityCounter,
        consequence
    } = rootState;
    return { 
        warriors,
        drotts,
        bonds,
        thraels,
        gold,
        move,
        raidAvailabilityCounter,
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
        },
        changeMovePoints: (newMovePoints) => {
            dispatch({
                type: "CHANGE_MOVE_POINTS",
                payload: newMovePoints
            })
        },
        changeRaidAvailabilityCounter: (newCounterPoints) => {
            dispatch({
                type: "CHANGE_RAID_AVAILABILITY_COUNTER",
                payload: newCounterPoints
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#2F4F4F', 
    },
    headerWrapper: {
        alignItems: 'center',
    },
    headerText: {
        color: 'red',
        fontSize: 25
    },
    fractionsWrapper: {
        flex: 0.8,
        justifyContent: 'space-between',
        // alignItems: 'flex-start'
    }
});