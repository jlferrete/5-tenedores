import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Overlay, Input, Button, Icon } from "react-native-elements";

export default class OverlayOneInput extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <Overlay isVisible={true} overlayBackgroundColor="transparent" overlayStyle={styles.overlayStyle}>
                <View style={styles.viewOverlay}>
                    <Input containerStyle={styles.inputContainer} placeholder="Texto...."
                        onChangeText={value => console.log(value)}
                        value=""
                    />
                    <Button buttonStyle={styles.buttonUpdate} title="Actualizar" />
                </View>
            </Overlay>
        );
    }

}

const styles = StyleSheet.create({
    overlayStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    viewOverlay: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 20
    },
    inputContainer: {
        marginBottom: 20
    },
    buttonUpdate: {
        backgroundColor: "#00a680"
    }
});