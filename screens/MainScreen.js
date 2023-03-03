import { ScrollView, TouchableOpacity } from 'react-native';
import CountryCard from '../components/CountryCard';
import { useEffect, useState } from 'react';
import FetchCountires from '../services/FetchCountries';
import Header from '../components/Header'
import DetailsScreen from './DetailsScreen';
import { Button } from 'react-native-elements';

export default function MainScreen ({navigation}) {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [region, setRegion] = useState('');

  const goToDetails = () => {
    navigation.navigate("Details");
  }

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
          <TouchableOpacity onPress={goToDetails} key={index}
          >
            <CountryCard
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
            />
          </TouchableOpacity>
          ))}
    </ScrollView>
  )
}