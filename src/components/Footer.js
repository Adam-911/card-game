import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import axesIcon from '../../assets/axes.png';
import Button from "./Button";
import ModalMenu from "./ModalMenu";
import ModalRaidScreen from "./ModalRaidScreen";
import Tutorial from "./Tutorial";

function Footer({ raidAvailabilityCounter }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ModalMenu/>
            { raidAvailabilityCounter === 4 ? 
                <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(true)}}>
                    <Image style={styles.img} source={axesIcon}/>
                </TouchableOpacity>
            :
                <View style={[styles.button, { opacity: 0.2 }]}>
                    <Image style={styles.img} source={axesIcon}/>
                </View>
            }
            <Tutorial/>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
                <ModalRaidScreen 
                  onPressYes={() => {setModalVisible(false)}} 
                  onPressNo={() => {setModalVisible(false)}}
                />
            </Modal>
        </View>
    )
}

const mapStateToProps = ({ rootState: { raidAvailabilityCounter } }) => {
    return { raidAvailabilityCounter }
}

export default connect(mapStateToProps)(Footer);

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#708090',
        borderRadius: 50,
        padding: 5,
        // marginLeft: 'auto'
    },
    img: {
        height: 80,
        width: 80,
    },
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
    }
});