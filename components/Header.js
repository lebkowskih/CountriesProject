import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>Odnajdź swój kraj</Text>
      </View>
    );
}

export default Header;

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#fff",
    height: 60,
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:12,
  }
});