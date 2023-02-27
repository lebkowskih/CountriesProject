import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Header = ({ handleInputChange }) => {
  return (
    <View style={styles.headerBackground}>
      <Text style={styles.headerText}>Odnajdź swój kraj</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Szukaj kraju..."
        onChangeText={(value) => {
          handleInputChange(value);
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
});