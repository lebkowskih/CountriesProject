import { ScrollView, StyleSheet } from 'react-native';
import { Button, Image, Text, Icon } from 'react-native-elements';
import FetchCountires from '../services/FetchCountries';
import { useEffect, useState } from 'react';
import { View } from 'react-native';


export default function DetailsScreen({navigation, route }) {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


     useEffect(() => {
        FetchCountires.fetchAllCountires(setCountries, setIsLoading);
      }, []);
    
    return (
        <ScrollView>
            <Button
                title="Back"
                onPress={() => navigation.navigate("Main")}
                buttonStyle={styles.Button1}
                icon={
                    <Icon
                      name='arrow-left'
                      type='entypo'
                      color='white'
                      containerStyle={{ marginRight: 5 }}
                    />
                  }
            />
            <Image 
                style={styles.image}
                source={{uri: route.params.country.flags.png}}
            />
            <Text style={styles.headStyle}>{route.params.country.name.common}</Text>
            <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Population:</Text> {route.params.country.population}</Text>
            <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Region:</Text> {route.params.country.region}</Text>
            <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Sub Region:</Text> {route.params.country.subregion}</Text>
            <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Capital:</Text> {route.params.country.capital}</Text>
            {/* <Text style={styles.textStyle2}> <Text style={styles.textStyle}>CCA3:</Text> {route.params.country.cca3}</Text> */}
            <Text></Text>
            <Text></Text>
            <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Top Level Domain:</Text> {Object.values(route.params.country.tld).join(", ")}</Text>
            <Text style={styles.textStyle2}> 
            <Text style={styles.textStyle}>Currencies:</Text> 
                {Object.keys(route.params.country.currencies).map(key => {
                const currency = route.params.country.currencies[key];
                return ` ${currency.name}`;})}
            </Text>
            <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Languages:</Text> {Object.values(route.params.country.languages).join(", ")}</Text>
            {/* <Text style={styles.textStyle2}> <Text style={styles.textStyle}>Borders:</Text> {(route.params.country.borders)} </Text> */}
            {/* <Text style={styles.textStyle2}> 
                <Text style={styles.textStyle}>Neighbors: </Text> 
                {route.params.country.borders != null ?
                <Text>{(route.params.country.borders).join(", ")}</Text>
                     : <Text>None</Text>
                }
            </Text> */}
          
            {route.params.country.borders != null ? (
            <>
            <Text style={styles.textStyle}>Borders Countries:</Text>
            <View style={styles.buttonContainer}>
                {route.params.country.borders.slice(0, 3).map(border =>
                    <Button
                        title={border}
                        key={border}
                        onPress={() => 
                            navigation.navigate("Details", {country: countries.find(country => country.cca3 === border)})}
                            buttonStyle={styles.Button2}
                        />)}
            </View>
            </>
            ) : (
                <Text></Text>
            )}
                        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width:350,
        height:220,
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "10%",
    },

    headStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: "10%",
        marginRight: "auto",
        marginTop: "5%",
    },

    textStyle: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: "10%",
        marginRight: "auto",
        marginTop: "5%",
    },

    textStyle2: {
        color: 'black',
        fontSize: 15,
        marginLeft: "10%",
        marginRight: "auto",
        marginTop: "5%",
    },

    Button1: {
        backgroundColor: 'gray',
        width:100,
        height:40,
        marginLeft: "5%",
        marginRight: "auto",
        marginTop: "15%",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
   
    Button2: {
        backgroundColor: 'gray',
        width:100,
        height:40,
        marginLeft: "5%",
        marginRight: "auto",
        marginTop: "1%",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 20
      },
      
      button: {
        backgroundColor: 'gray',
        width: 100,
        height: 40,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        margin: 10
      },
})