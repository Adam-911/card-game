import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
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
    drotts,
    bonds,
    thraels,
    gold,
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [fractionNotAvialable, setFractionNotAvialable] = useState(true);

    useFocusEffect(React.useCallback(() => {
        const fractionsArray = [warriors, drotts, bonds, thraels];

        for (const el of fractionsArray) {
            
            if (el <= 0 || gold <= 0) {
                setModalVisible(true);
                break;
            }

        }

        setTimeout(() => { setFractionNotAvialable(selectedFraction) }, 0);        
    }, [warriors, drotts, bonds, thraels, gold, selectedFraction, fractionNotAvialable]));

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
            <Text style={styles.headerText}>Кого вы сегодня выслушаете, великий ярл?</Text>
            <View style={[styles.row, { marginBottom: 20 }]}>
                <Fraction 
                  label='Воины' 
                  available={fractionNotAvialable !== 'warriors'} 
                  imgSrc={warriorImg} 
                  onPress={() => goToDecision("warriors")}
                  isAlarm={warriors <= 3}
                />
                <Fraction 
                  label='Дроты' 
                  available={fractionNotAvialable !== 'drotts'} 
                  imgSrc={drottImg} 
                  onPress={() => goToDecision("drotts")}
                  isAlarm={drotts <= 3}
                />
            </View>
            <View style={styles.row}>
                <Fraction 
                  label='Бонды' 
                  available={fractionNotAvialable !== 'bonds'} 
                  imgSrc={bondImg} 
                  onPress={() => goToDecision("bonds")}
                  isAlarm={bonds <= 3}
                />
                <Fraction 
                  label='Трели' 
                  available={fractionNotAvialable !== 'thraels'} 
                  imgSrc={thraelImg} 
                  onPress={() => goToDecision("thraels")}
                  isAlarm={thraels <= 3}
                />
                {/* <Fraction label='Викинги' imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/>
                <Fraction label='Викинги' imgSrc={warriorImg} onPress={() => goToDecision("warriors")}/> */}
            </View>
            {/* <Pressable style={styles.button} onPress={() => {setModalVisible(true)}}>
                <Text>Открыть</Text>
            </Pressable> */}
            <Footer/>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
            // visible={true}
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
        drotts,
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
        drotts,
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
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#2F4F4F',
    }, 
    headerText: {
        fontSize: 20,
        color: '#FFFAFA',
        textAlign: 'center',
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
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