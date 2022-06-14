import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import data from "../utils/fractions";
import { connect } from "react-redux";
import { getRandomInt, getStringNum } from "../utils/utils";

function Decision({ 
    navigation, 
    selectedFraction,
    selectConsequence,
    warriorImg,
    drottImg,
    bondImg,
    thraelImg 
}) {
    const [question, setQuestion] = useState();

    useEffect(() => {
        setQuestion(data[selectedFraction].questions[getRandomInt(3)]);
    }, []);

    const goToResultWithPositive = () => {
        selectConsequence(question.dependencies.yes);
        navigation.navigate('result');
    }

    const goToResultWithNegative = () => {
        selectConsequence(question.dependencies.no);
        navigation.navigate('result');
    }
    
    const selectImage = () => {
        switch(selectedFraction) {
            case "warriors": 
                return warriorImg;
            case "drotts":
                return drottImg;
            case "bonds":
                return bondImg;
            case "thraels":
                return thraelImg;
        }
    }

    return(
        <View style={styles.container}>
            <Image source={selectImage()} style={styles.img}/>
            <Text style={styles.question}>{question ? question.text : ""}</Text>
            <View style={styles.buttonsWrapper}>
                <Button 
                  label="Да" 
                  gold={question?.dependencies?.yes?.gold} 
                  color="green" 
                  onPress={goToResultWithPositive}
                />
                <Button 
                  label="Нет" 
                  color='red' 
                  gold={question?.dependencies?.no?.gold} 
                  onPress={goToResultWithNegative}
                />
            </View>
        </View>
    );
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
        selectConsequence: (consequence) => {
            dispatch({
                type: 'CHANGE_CONSEQUENCE',
                payload: consequence
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decision);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#2F4F4F',
    },
    img: {
        height: 100,
        width: 100
    },
    question: {
        fontSize: 20,
        color: '#FFFAFA',
        textAlign: 'center'
    },
    buttonsWrapper: {
        alignSelf: 'stretch'
    }
});