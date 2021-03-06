/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  View, 
  StyleSheet,
  Text,
  Button,
  Linking,
} from 'react-native';

const App: () => Node = () => {
  //const [name, setName] = useState('Bipo')
  const [person, setPerson] = useState({name: 'Bipo', nationality: 'French'})
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.body}>
      <Text style={styles.text}>I have been clicked on {counter} times!</Text>
      <Button title='Change Name' onPress={()=>{ setCounter(counter + 1)}}></Button>
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
