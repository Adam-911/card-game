import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import xImg from '../../assets/x.png';

function FractionResult({ 
    points, 
    result,
    fraction,
    warriorImg,
    drottImg,
    bondImg,
    thraelImg 
}) {

    const fractionPoints = [];
    const editedResult = result < 0 ? Math.abs(result) : 0;

    for (let i = 0; i < points + editedResult; i++) {
        const style = [styles.xImgS];
        
        if (editedResult && i >= points) {
            style.push({ tintColor: 'grey' });
        } else if (i >= (points - result)) {
            style.push({ tintColor: 'green' });
        } 

        fractionPoints.push( 
            <Image key={i} source={xImg} style={style}/>
        )
    }

    const createResult = () => {
        return result > 0 ? "+" + result: result;
    }

    const getTextStyle = () => {
        return result > 0 ? [styles.textPositive, styles.text] : [styles.textNegative, styles.text];
    }

    const selectImage = () => {
        switch(fraction) {
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

    return (
        <View style={styles.container}>
            <Image source={selectImage()} style={styles.img}/>
            <View style={styles.xWrapper}>
                {fractionPoints}
            </View> 
            <Text style={getTextStyle()}>{createResult()}</Text>
        </View>
    );
}

const mapStateToProps = ({ images }) => {
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
        thraelImg 
    };
}

export default connect(mapStateToProps)(FractionResult);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        height: 50,
        width: 50,
        marginRight: 20
    },
    xImgS: {
        height: 20,
        width: 20,
        marginRight: 7,
        marginTop: 7,
        tintColor: 'white'
    },
    xWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    textPositive: {
        color: 'green'
    },
    textNegative: {
        color: 'red'
    },
    text: {
        fontSize: 20,
    }
});