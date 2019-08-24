import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

import UpdateUserInfo from './UpdateUserInfo';

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

    checkUserAvatar = photoURL => {
        return photoURL ? photoURL
            : "https://api.adorable.io/avatars/285/abott@adorable.png"
    }

    render() {
        const { displayName, email, photoURL } = this.state.userInfo;
        return (
            <View>
                <View style={styles.viewUserInfo}>
                    <Avatar
                        rounded
                        size="large"
                        source={{ uri: this.checkUserAvatar(photoURL) }}
                        containerStyle={styles.userInfoAvatar}
                    />
                    <Text style={styles.displayname}>{displayName}</Text>
                    <Text>{email}</Text>
                </View>

                <UpdateUserInfo />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewUserInfo: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: "#f2f2f2"
    },
    userInfoAvatar: {
        marginRight: 20
    },
    displayName: {
        fontWeight: "bold"
    }
});