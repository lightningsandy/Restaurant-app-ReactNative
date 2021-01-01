import React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails';
import {withNavigation} from 'react-navigation';
//if we wanted navigation prop to navigate, we can get only through searchScreen as a prop. and search screen
//is not going to use it. so to directly access navigation we use with navigation

//navigation is sent as prop coz of withNavigation
const ResultsList = ({title, results, navigation}) => {

   if(!results.length){
       return null;
   }
   //this above make sure that when a result is not available for a particular title  then it wont show title too,
   // else only title will be presented without any hotels

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => {results.id}}
            renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id: item.id})} >
                  {/* sending id to resultsshow page to access */}
                   <ResultsDetails results={item} />
                   </TouchableOpacity>
                );
            }} />
        </View>
    );
}


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop:30
    }
});


export default withNavigation(ResultsList);

// gives new form of resultsList along with access to navigation