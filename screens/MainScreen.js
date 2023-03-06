import { ActivityIndicator, ScrollView, TouchableOpacity, StyleSheet, View} from 'react-native';
import CountryCard from '../components/CountryCard';
import { useEffect, useState } from 'react';
import FetchCountires from '../services/FetchCountries';
import Header from '../components/Header'

export default function MainScreen ({navigation}) {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [region, setRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    if (value != '') {
      FetchCountires.findCountry(value, setCountries);
    }
  };

  const handleRegionSelect = (value) => {
    setRegion(value);
    FetchCountires.selectRegion(value, setCountries);
  }

  useEffect(() => {
    FetchCountires.fetchAllCountires(setCountries, setIsLoading);
  }, []);

  return (
    <ScrollView>
        <Header handleInputChange={handleInputChange} handleRegionSelect={handleRegionSelect}></Header>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff"/>
          ) : countries.map((country, index) => (
          <TouchableOpacity onPress={() =>
            navigation.navigate("Details", {country: country})} key={index}>
            <CountryCard
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
              tld={country.tld}
              currencies={country.currencies}
              languages={country.languages}
              borders={country.borders}
              cca3={country.cca3}
            />
          </TouchableOpacity>
          ))}
    </ScrollView>
  )
}