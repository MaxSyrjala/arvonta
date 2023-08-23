import { StatusBar } from 'expo-status-bar';
import {Button,  Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useState } from 'react';


export default function NumberGuessing() {
const [result, setResult] =React.useState("Arvaa numero 1-100 välillä!");
const [correct, setCorrect] =React.useState(Math.floor(Math.random() * 100) + 1)
const [guess, setGuess] =React.useState(0)
const [count, setCount] = useState(1);

const testGuess = () => {
if (guess > correct) {
  setGuess("")
    setResult("Oikea vastaus on pienempi kuin " +guess)
    setCount(count + 1)

} else if (guess < correct) {
  setGuess("")
    setResult("Oikea vastaus on suurempi kuin " +guess)
    setCount(count + 1)
} else {
  Alert.alert("Arvasit oikein " +count+ ". yrityksellä!")
  setGuess("")
  setResult("Arvaa numero 1-100 välillä!")
  setCorrect(Math.floor(Math.random() * 100) + 1)
  setCount(0)
}

};


  return(
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={guess => setGuess(guess)} value={guess}/>
      <Button onPress={testGuess} title ="Arvaa" />




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
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }
});
