import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Greeting from './components/Greeting';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Greeting name="Rizwan Saeed" />
      <Text style={styles.counter}>Button pressed: {count} times</Text>
      <Button title="Tap me" onPress={() => setCount(count + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  counter: { fontSize: 18 },
});
