import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";

export default class MuAccountUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.viewBody}>
                <Text>My Account User...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30
    }
});