import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

function Header({ gold }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{"GOLD: " + gold}</Text>
        </View>
    )
}

const mapStateToProps = ({ rootState }) => {
    const { gold } = rootState;
    return { gold };
}

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F4F4F',
    },
    text: {
        color: 'white'
    }
});