import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () =>{


    const filterByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        })
    }

    const [term,setTerm] = useState("");
    const [searchApi,errorMessage,results] = useResults();
    
    return (
        <>
            {/* we provide flex:1 to parent view so that it takes 
            maximum visible space in mobile and so no info will be cut in bottom, 
            else eventhough scrollview is applied some info will be hide but if 
            might cause some problems so we use empty tag  */}
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => {setTerm(newTerm)}}
            onTermSubmit={() =>  searchApi(term)}
             />
             {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView showsVerticalScrollIndicator={false}>
            <ResultsList results={filterByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterByPrice('$$')} title="Bit pricer" />
            <ResultsList results={filterByPrice('$$$')} title="Big Spender!" />
            </ScrollView>    
        </>
    );
}

const styles = StyleSheet.create({});


export default SearchScreen;