import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import CountryCard from './components/CountryCard';

export default function App() {
  return (
    <View>
      <Header></Header>
      <CountryCard></CountryCard>
    </View>
  );
}

