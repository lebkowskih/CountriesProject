import { ScrollView, StyleSheet } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

export default function DetailsScreen({navigation, route}) {
    return (
        <ScrollView>
            <Text>{route.params.country.name.common}</Text>
            <Text>{route.params.country.population}</Text>
            <Text>{route.params.country.region}</Text>
            <Text>{route.params.country.subregion}</Text>
            <Text>{route.params.country.capital}</Text>
            <Text>{route.params.country.topLevelDomain}</Text>
            <Button 
                text="<- Back"
                onPress={() => navigation.navigate("Main")}
            />
            <Image 
                style={styles.image}
                source={{uri: route.params.country.flags.png}}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width:250,
        height:250,
    }
})