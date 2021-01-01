import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


const ResultsDetails = ({results}) => {
    return (
    <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri:results.image_url}} />
        <Text style={styles.nameStyle}>{results.name}</Text>
        <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
    marginLeft: 15
    },
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 5,
        marginTop:10       
    },
    nameStyle:{
        fontWeight:'bold',
        marginTop:5      
    }
});

export default ResultsDetails;