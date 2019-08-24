import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from "react-native-elements";

import OverlayOneInput from "../../Elements/OverlayOneInput";

export default class UpdateUserInfo extends Component {

    constructor() {
        super();

        this.state = {
            menuItems: [
                {
                    title: "Cambiar Nombre y Apellidos",
                    iconType: "material-community",
                    iconNameLeft: "account-circle",
                    iconColorLeft: "#ccc",
                    iconNameRight: "chevron-right",
                    iconColorRight: "#ccc",
                    onPress: () =>
                        console.log('Ha realizado click en Cambiar Nombre y Apellidos')
                },
                {
                    title: "Cambiar Email",
                    iconType: "material-community",
                    iconNameLeft: "at",
                    iconColorLeft: "#ccc",
                    iconNameRight: "chevron-right",
                    iconColorRight: "#ccc",
                    onPress: () =>
                        console.log('Ha realizado click en Cambiar Email')
                },
                {
                    title: "Cambiar Contraseña",
                    iconType: "material-community",
                    iconNameLeft: "lock-reset",
                    iconColorLeft: "#ccc",
                    iconNameRight: "chevron-right",
                    iconColorRight: "#ccc",
                    onPress: () =>
                        console.log('Ha realizado click en Cambiar Contraseña')
                }
            ]
        };
    }

    render() {
        const { menuItems } = this.state;
        return (
            <View>
                {menuItems.map((item, index) => (
                    <ListItem
                        key={index}
                        title={item.title}
                        leftIcon={{
                            type: item.iconType,
                            name: item.iconNameLeft,
                            color: item.iconColorLeft
                        }}
                        rightIcon={{
                            type: item.iconType,
                            name: item.iconNameRight,
                            color: item.iconColorRight
                        }}
                        onPress={item.onPress}
                        containerStyle={styles.contentContainerStyle}
                    />
                ))}

                <OverlayOneInput />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3d3"
    }
});