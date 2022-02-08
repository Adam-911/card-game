import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Fraction from '../components/Fraction';

function Main({ 
    navigation, 
    selectFraction,
    selectedFraction,
    warriorImg,
    drottImg,
    bondImg,
    thraelImg,
    warriors,
    drots,
    bonds,
    thraels,
    gold,
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [fractionNotAvialable, setFractionNotAvialable] = useState(true);

    useFocusEffect(React.useCallback(() => {
        const fractionsArray = [warriors, drots, bonds, thraels];

        for (const el of fractionsArray) {
            
            if (el <= 0 || gold <= 0) {
                setModalVisible(true);
                break;
            }

        }

        if (selectedFraction !== "none") {
            setTimeout(() => { setFractionNotAvialable(selectedFraction) }, 0);        
        }

    }, [warriors, drots, bonds, thraels, gold, selectedFraction]));

    const goToDecision = (fraction) => {
        selectFraction(fraction);
        navigation.navigate("decision");
    }

    const onPressOkModal = () => {
        navigation.navigate("end");
        setModalVisible(false);   
    }

    return (
        <View style={styles.container}>
            <View style={[styles.row, { marginBottom: 20 }]}>
                <Fraction label='Воины' available={fractionNotAvialable !== 'warriors'} imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/>
                <Fraction label='Дроты' available={fractionNotAvialable !== 'drotts'} imgSrc={drottImg} onPress={() => goToDecision("drotts")}/>
                <Fraction label='Бонды' available={fractionNotAvialable !== 'bonds'} imgSrc={bondImg} onPress={() => goToDecision("bonds")}/>
            </View>
            <View style={styles.row}>
                <Fraction label='Трели' available={fractionNotAvialable !== 'thraels'} imgSrc={thraelImg} onPress={() => goToDecision("thraels")}/>
                {/* <Fraction label='Викинги' imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/>
                <Fraction label='Викинги' imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/> */}
            </View>
            {/* <Pressable style={styles.button} onPress={() => {setModalVisible(true)}}>
                <Text>Открыть</Text>
            </Pressable> */}
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Ваша сага окончена!</Text>
                        <Pressable style={styles.button} onPress={onPressOkModal}>
                            <Text>ОК</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    ) 
}

const mapStateToProps = ({ rootState, images }) => {
    const { 
        selectedFraction,
        warriors,
        drots,
        bonds,
        thraels,
        gold,
    } = rootState; 
    const { 
        warriorImg,
        drottImg,
        bondImg,
        thraelImg 
    } = images;
    return { 
        warriorImg,
        drottImg,
        bondImg,
        thraelImg,
        selectedFraction,
        warriors,
        drots,
        bonds,
        thraels,
        gold,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems: 'center'
    }
});