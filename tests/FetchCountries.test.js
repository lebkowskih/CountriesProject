import fetchMock from "jest-fetch-mock";
import FetchCountries from "../services/FetchCountries";

const BASE_URL = "https://restcountries.com/v3.1/";

describe("FetchCountires", () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  afterAll(() => {
    fetchMock.disableMocks();
  });

  it("should fetch all countries and update state", async () => {
    const mockCountries = [
      { name: "Canada", capital: "Ottawa" },
      { name: "Germany", capital: "Berlin" },
      { name: "Japan", capital: "Tokyo" },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(mockCountries));

    const setCountries = jest.fn();
    const setIsLoading = jest.fn();
    FetchCountries.fetchAllCountires(setCountries, setIsLoading);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(BASE_URL + "all");
    console.log(fetchMock.mock.results[0]['value']);
  });
});
