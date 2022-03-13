import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import react, { useState } from 'react';
import * as Speech from 'expo-speech';

export default function App() {

  const [input, setInput] = useState('')

  const hearText = () => {
    Speech.speak(input)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={input => setInput(input)} />
      <Button title="Press to hear text" onPress={hearText} />
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
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1
  }
});
