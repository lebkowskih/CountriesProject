import { View, Text } from "react-native";
import { Card } from "react-native-elements";

const CountryCard = props => {
    return (
      <View>
        <Card>
          <Card.Image source={{ uri: props.flag }} />
          <Card.Title>{props.name}</Card.Title>
          <Text>Liczba mieszkańców: {props.population} </Text>
          <Text>Kontynent: {props.region} </Text>
          <Text>Stolica: {props.capital}</Text>
        </Card>
      </View>
    );
}

export default CountryCard;