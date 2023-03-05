import { ScrollView, TouchableOpacity } from 'react-native';
import CountryCard from '../components/CountryCard';
import { useEffect, useState } from 'react';
import FetchCountires from '../services/FetchCountries';
import Header from '../components/Header'

export default function MainScreen ({navigation}) {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [region, setRegion] = useState('');

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
    FetchCountires.fetchAllCountires(setCountries);
  }, []);

  return (
    <ScrollView>
        <Header handleInputChange={handleInputChange} handleRegionSelect={handleRegionSelect}></Header>
        {countries.map((country, index) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", {country: country})} key={index}>
            <CountryCard
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
              tld={country.tld}
              currencies={country.currencies}
              languages={country.languages}
            />
          </TouchableOpacity>
          ))}
    </ScrollView>
  )
}