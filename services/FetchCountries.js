const BASE_URL = "https://restcountries.com/v3.1/"

class FetchCountires {
  fetchAllCountires(setCountries) {
    fetch(BASE_URL + "all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  };

  findCountry (countryName, setCountries) {
  fetch(BASE_URL + countryName)
    .then((response) => response.json())
    .then((data) => {
      setCountries(data)
    });
  };
}

export default new FetchCountires();

