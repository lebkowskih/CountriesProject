import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Header from "../components/Header";
import SelectDropdown from "react-native-select-dropdown";

describe("Header component", () => {
  const handleInputChangeMock = jest.fn();
  const handleRegionSelectMock = jest.fn();

  it("renders the component correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Header
        handleInputChange={handleInputChangeMock}
        handleRegionSelect={handleRegionSelectMock}
      />
    );

    expect(getByText("Find your country!")).toBeDefined();
    expect(getByPlaceholderText("Search for your country...")).toBeDefined();
  });

  it("calls handleInputChange when text input changes", () => {
    const { getByPlaceholderText } = render(
      <Header
        handleInputChange={handleInputChangeMock}
        handleRegionSelect={handleRegionSelectMock}
      />
    );

    fireEvent.changeText(
      getByPlaceholderText("Search for your country..."),
      "Canada"
    );

    expect(handleInputChangeMock).toHaveBeenCalledWith("Canada");
  });
});
