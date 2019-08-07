import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

import * as firebase from "firebase";

export default class UserInfo extends Component {
    constructor(state) {
        super(state);

        this.state = {
            userInfo: {
                displayName: "",
                email: "",
                photoUrl: ""
            }
        };
    }

    componentDidMount = () => {
        this.getUserInfo();
    };

    getUserInfo = async () => {
        const user = firebase.auth().currentUser;

        await user.providerData.forEach(userInfo => {
            this.setState({
                userInfo
            });
        });

        console.log(this.state);
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