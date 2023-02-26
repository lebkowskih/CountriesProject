import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import CountryCard from './components/CountryCard';
import { useEffect, useState } from 'react';

export default function App() {
const [countries, setCountries] = useState([]);

useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => setCountries(data))
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

