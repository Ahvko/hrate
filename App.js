import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  function calculate() {
    const ageValue = parseFloat(age.replace(',', '.'));
    const lower = Math.round((220 - ageValue) * 0.65);
    const upper = Math.round((220 - ageValue) * 0.85);
    setLowerLimit(lower);
    setUpperLimit(upper);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        style={styles.field} 
        value={age} 
        onChangeText={text => setAge(text)} 
        keyboardType='decimal-pad' 
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowerLimit}-{upperLimit}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,
  },
});