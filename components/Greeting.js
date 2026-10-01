import { Text, StyleSheet } from 'react-native';

export default function Greeting({ name }) {
  return <Text style={styles.text}>Hello, {name}!</Text>;
}

const styles = StyleSheet.create({
  text: { fontSize: 24, fontWeight: 'bold', color: '#4B0082' },
});
