import { View, Text } from "react-native";
import { Card } from "react-native-elements";

const CountryCard = props => {
    return (
      <View>
        <Card>
          <Card.Image source={{ uri: props.flag }} />
          <Card.Title>{props.name}</Card.Title>
          <Text>Population: {props.population} </Text>
          <Text>Region: {props.region} </Text>
          <Text>Capital: {props.capital}</Text>
        </Card>
      </View>
    );
}

export default CountryCard;