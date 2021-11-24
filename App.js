import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {

  const [input, setInput] = useState('')

  
  const speak = () => {
    Speech.speak(input);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder='What would you like me to say?' onChangeText={(input) => setInput(input)} value={input}/>
      </View>
      <View style={styles.inputWrapper}>
        <Button title='SPEAK' onPress={speak} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  input: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
});
