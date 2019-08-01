import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UserNavigation from "./app/navigations/User";
import firebaseConfig from "./app/utils/FireBase";
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <UserNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
