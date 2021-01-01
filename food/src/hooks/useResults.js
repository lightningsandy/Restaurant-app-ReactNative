import {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term: searchTerm,
                location: 'california'
            }
        });
        setResults(response.data.businesses)
    } catch(e){
        setErrorMessage('something went wrong');
    }
    };

    useEffect(() => {
      searchApi('pasta');
    }, []);
    //this use effect hook is used to call the function only once when the code renders for first time.. see ss to see different use effects
    
    return [searchApi,errorMessage,results];
}
