const BASE_URL = "https://restcountries.com/v3.1/"

class FetchCountires {
  fetchAllCountires(setCountries, setIsLoading) {
    setIsLoading(true);
    fetch(BASE_URL + "all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  findCountry (countryName, setCountries, setIsLoading) {
    setIsLoading(true);
    fetch(BASE_URL + 'name/'+ countryName)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
      })
      .finally(() => {
          setIsLoading(false);
        });
  };

  selectRegion(value, setCountries, setIsLoading) {
    setIsLoading(true);
    fetch(BASE_URL + 'region/' + value)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
      }).finally(() => {
        setIsLoading(false);
      });
  };
}

export default new FetchCountires();

