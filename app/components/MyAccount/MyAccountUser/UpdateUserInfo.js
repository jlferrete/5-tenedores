import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from "react-native-elements";

export default class UpdateUserInfo extends Component {

    constructor() {
        super();

        this.state = {
            menuItems: [
                {
                    title: "Cambiar Nombre y Apellidos",
                    iconType: "material-community",
                    iconNameRight: "chevron-right",
                    iconColorRight: "#ccc",
                    iconNameLeft: "account-circle",
                    iconColorLeft: "#ccc",
                    onPress: () => console.log('Ha realizado click en Cambiar Nombre y Apellidos')
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
                    />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({});