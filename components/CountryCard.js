import { View, Text } from "react-native";
import { Card } from "react-native-elements";

const CountryCard = () => {
    return (
      <View>
        <Card>
          <Card.Image source={{ uri: "https://flagcdn.com/w2560/de.png" }} />
          <Card.Title>Niemcy</Card.Title>
          <Text>Liczba mieszkańców: </Text>
          <Text>Kontynent: </Text>
          <Text>Stolica: </Text>
        </Card>
      </View>
    );
}

export default CountryCard