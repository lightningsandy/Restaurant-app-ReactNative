import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({navigation}) => {

   const [result,setResult] = useState(null);
   //we're passing null coz havent got the results yet through async

   const id= navigation.getParam('id');
//    getting id sent by resultsList page

   
    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResults(id);
    }, []);

    if(!result){
        return null;
    }
    // this code above make sure that at this time when result it empty it returns null 
    //so the below jsx wont run until results gets a value


    console.log(result)

    return (
        
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{result.name}</Text>
          <FlatList
          showsVerticalScrollIndicator={false}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({item}) => {
              return <Image source={{uri: item }} style={styles.imageStyle} />
          }} />
        </View>  
        
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        width: 300,
        height:300,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    viewStyle:{
        alignItems: 'center',
        flex: 1
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    }

});

export default ResultsShowScreen;