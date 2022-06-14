import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Button from "../components/Button";

function EndGame({ startNewGame, navigation, gold, move }) {
    const onPressOK = () => {
        startNewGame();
        navigation.navigate('main');
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.headerText}>Конец саги</Text>
            <Text style={styles.text}>Ваша сага закончилась ничем</Text>
            <Text style={styles.text}>
                Ваше золото: <Text style={[styles.text, styles.gold]}>{gold}</Text>
            </Text>
            <Text style={styles.text}>
                Кол-во ходов: <Text style={[styles.text, styles.move]}>{move}</Text>
            </Text>
            <Button 
                label={'Еще раз'}
                color={'green'}
                onPress={onPressOK}
            />
        </View>
    )
}

const mapStateToProps = ({ rootState }) => {
    const {gold, move} = rootState;
    return {gold, move};
}

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: () => {
            dispatch({
                type: "NEW_GAME",
                payload: {}
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#2F4F4F',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    gold: {
        color: 'gold'
    },
    move: {
        color: 'silver'
    }
});