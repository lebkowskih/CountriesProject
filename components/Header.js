import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
const Header = ({ handleInputChange, handleRegionSelect }) => {
  return (
    <View style={styles.headerBackground}>
      <Text style={styles.headerText}>Find your country!</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Search for your country..."
        onChangeText={(value) => {
          handleInputChange(value);
        }}
      />
      <SelectDropdown
        data={regions}
        buttonStyle={styles.selector}
        onSelect={(value, index) => {
          handleRegionSelect(value)
        }}
        buttonTextAfterSelection={(value, index) => {
          return value;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#fff",
    height: 150,
    paddingTop: 30,
    paddingLeft: 5,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey', 
    marginBottom:50,
    maxWidth:250,
  },
  selector: {
    bottom:40,
    width:150,
  }
});