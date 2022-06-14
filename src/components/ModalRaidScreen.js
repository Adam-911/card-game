import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import axesImg from '../../assets/axes.png';
import data from '../utils/raid-results';
import { getRandomInt, getStringNum } from "../utils/utils";
import { connect } from "react-redux";

const ModalRaidScreen = ({
    onPressNo,
    gold,
    changeGoldPoints,
    changeRaidAvailabilityCounter
}) => {
    const [isRaid, setIsRaid] = useState(false);
    const [isRaidLoading, setIsRaidLoading] = useState(true);
    const [textResult, setTextResult] = useState();
    const [goldResult, setGoldResult] = useState();

    useEffect(() => {

        if (isRaid) {
            const {
                text,
                gold
            } = data[getRandomInt(3)];
            setGoldResult(gold);
            setTextResult(text);
        }

    }, [isRaid]);

    const onPressOk = () => {
        changeGoldPoints(gold + goldResult);
        changeRaidAvailabilityCounter(1);
        onPressNo();
    }

    const raidResult = () => {
        setTimeout(() => setIsRaidLoading(false), 2000);

        if (isRaidLoading) {
            return <Text style={styles.text}>Идет рейд...</Text>
        } else {
            return (
                <>
                    <Text style={styles.text}>{textResult}</Text>
                    <Text style={[styles.text, {color: 'green'}]}>{getStringNum(goldResult)}</Text>
                    <Button label="ОК " color="green" onPress={onPressOk}/>
                </>
            )
        }

    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                { !isRaid ?
                    <> 
                        <Text style={styles.modalHeader}>Начать набег?</Text>
                        <View style={styles.modalButtonsWrapper}>
                            <Button label="Да " color="green" onPress={() => {setIsRaid(true)}}/>
                            <Button label="Нет" color="red" onPress={() => {onPressNo()}}/>
                        </View>
                    </>
                : 
                    <>
                        <Image style={styles.headImageRaid} source={axesImg}/>
                        {raidResult()}
                    </>
                }
            </View>
        </View>
    )
}

const mapStateToProps = ({ rootState: { gold, raidAvailabilityCounter } }) => {
    return { gold, raidAvailabilityCounter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeGoldPoints: (newGoldPoints) => {
            dispatch({
                type: "CHANGE_GOLD_POINTS",
                payload: newGoldPoints
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalRaidScreen);

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(60, 60, 60, 0.8)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent: 'center',
        alignItems: "stretch",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalHeader: {
        fontSize: 25
    },
    modalButtonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headImageRaid: {
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
    }
});