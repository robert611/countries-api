import { useState } from 'react';
import useFetch from './useFetch';

const Home = () => {
    const [countriesCards, setCountriesCards] = useState(null);
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const handleButtonClick = () => {
        let filteredCountries = countries.filter(country => country.name.indexOf(query) === 0);

        createCountriesCards(filteredCountries);
    }

    const createCountriesCards = (countries) => {
        let tempCountriesCards = countries.map((country) => (
            <div className="card" key={country.name}>
                <img src={country.flag} alt={country.name} className="w-full h-32 sm:h-48 object-cover"></img>
                <h2 className="mt-3 mb-3 ml-2">{country.name}</h2>
            </div>
        ));

        if(countries.length === 0) {
            tempCountriesCards = (
                <div className="text-center col-start-1 col-end-7">
                    <h2 className="text-center text-lg">None country was found</h2>
                </div>
            );
        }

        setCountriesCards(tempCountriesCards);
    }

    let {data: countries, isPending, error} = useFetch('https://restcountries.eu/rest/v2/all', createCountriesCards)

    return ( 
        <div className="home container mx-auto mt-8 pl-2 pr-2">
            <div className="mt-12 mb-12 text-center">
                <input type="text" value={query} onChange={handleInputChange} className="mt-1 mr-5 border border-indigo-400 bg-indigo-100 focus:bg-white text-gray-900 appearance-none inline-block w-6/12 rounded py-3 px-4 focus:outline-none"></input>
             
                <div className="inline sm:w-2/12 md:w-1/12">
                    <button onClick={handleButtonClick} className="mt-1 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">Search</button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {countriesCards}
            </div>
        </div>
    );
}

export default Home;