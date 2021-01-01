import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return (
        <View style={styles.backgroundStyles}>
            <FontAwesome name="search" style={styles.iconStyle} />
            <TextInput 
            autoCapitalize= 'none'
            autoCorrect={false}
            placeholder="search" 
            style={styles.inputStyle}
            value = {term}
            onChangeText = {(newTerm) => {onTermChange(newTerm)}} //or onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyles:{
        marginTop: 15,
        backgroundColor: 'white',
        height: 50,
        marginHorizontal:15,
        borderRadius:8,
        marginBottom: 10,
        flexDirection: 'row' //if align items is used here, the text box height reduces. so users cant click fully textbox
    },
    inputStyle:{
        fontSize: 20,
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});


export default SearchBar;