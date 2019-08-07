import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

import * as firebase from "firebase";

export default class UserInfo extends Component {
    constructor(state) {
        super(state);

        this.state = {
            userInfo: {}
        };
    }

    componentDidMount = async () => {
        await this.getUserInfo();
    };

    getUserInfo = () => {
        const user = firebase.auth().currentUser;

        user.providerData.forEach(userInfo => {
            this.setState({
                userInfo
            });
        });


    };

    render() {
        return (
            <View style={styles.viewUserInfo}>
                <Text>User info...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewUserInfo: {
        alignItems: "center",
        flexDirection: "row"
    }
});