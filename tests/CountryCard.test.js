import React from "react";
import { shallow } from "enzyme";
import { Text } from "react-native";
import CountryCard from "../components/CountryCard.js";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { Card } from "react-native-elements";

Enzyme.configure({ adapter: new Adapter() });

describe("CountryCard component", () => {
  const props = {
    name: "Test Country",
    population: "1000000",
    region: "Test Region",
    capital: "Test Capital",
    flag: "https://test.com/test.png",
  };

  it("should render card title with the country name", () => {
    const wrapper = shallow(<CountryCard {...props} />);
    expect(wrapper.find(Card.Title).props().children).toEqual(props.name);
  });

  it("should render population information", () => {
    const wrapper = shallow(<CountryCard {...props} />);
    expect(wrapper.find(Text).at(1).props().children).toContain("Population");
    expect(wrapper.find(Text).at(0).props().children).toContain(props.population);
  });

  it("should render region information", () => {
    const wrapper = shallow(<CountryCard {...props} />);
    expect(wrapper.find(Text).at(3).props().children).toContain("Region");
    expect(wrapper.find(Text).at(2).props().children).toContain(props.region);
  });

  it("should render capital information", () => {
    const wrapper = shallow(<CountryCard {...props} />);
    expect(wrapper.find(Text).at(5).props().children).toContain("Capital");
    expect(wrapper.find(Text).at(4).props().children).toContain(props.capital);
  });

  it("should render country img", () => {
    const wrapper = shallow(<CountryCard {...props} />);
    expect(wrapper.find(Card.Image).props().source.uri).toEqual(props.flag);
  })
  
});
