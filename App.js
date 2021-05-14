/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  View, 
  StyleSheet,
  Text,
  Button,
  Linking,
} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello World</Text>
      <Button title='Youtube' onPress={()=>{Linking.openURL('https://youtube.com')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
});

export default App;
