import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { StyleSheet } from 'react-native';

const CountryCard = props => {
    return (
      <View>
        <Card>
          <Card.Image source={{ uri: props.flag }} />
          <Card.Title style={styles.headStyle}>{props.name}</Card.Title>
          <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Population: </Text>{props.population} </Text>
          <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Region: </Text>{props.region} </Text>
          <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Capital: </Text>{props.capital}</Text>
          {/* <Text>Population: {props.population} </Text>
          <Text>Region: {props.region} </Text>
          <Text>Capital: {props.capital}</Text> */}
        </Card>
      </View>
    );
}

export default CountryCard;

const styles = StyleSheet.create({
  headStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
},

  textStyle: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: "auto",
      marginRight: "auto",
  },

  textStyle2: {
      color: 'black',
      fontSize: 15,
      marginLeft: "auto",
      marginRight: "auto",
  },
 
})