import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import CountryCard from './components/CountryCard';
import { useEffect, useState } from 'react';
import fetchAllCountires from './services/FetchCountries';

export default function App() {
const [countries, setCountries] = useState([]);

useEffect(() => {
  fetchAllCountires(setCountries);
}, []);

  return (
    <ScrollView>
      <Header></Header>
      {countries.map((country, index) => (
        <CountryCard
          key={index}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flags.png}
        />
      ))}
    </ScrollView>
  );
}

