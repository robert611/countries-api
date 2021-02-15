import useFetch from './useFetch';

const Home = () => {
    const {data: countries, isPending, error} = useFetch('https://restcountries.eu/rest/v2/all')
    
    const handleInputChange = (event) => {
        
    }

    return ( 
        <div class="home container mx-auto mt-8">
            <div className="mt-12 mb-12 text-center">
                <input type="text" onChange={handleInputChange} className="border border-indigo-400 bg-indigo-100 focus:bg-white text-gray-900 appearance-none inline-block w-6/12 rounded py-3 px-4 focus:outline-none"></input>
                <button className="ml-5 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none w-1/12">Search</button>
            </div>
            <div className="grid grid-cols-4 gap-10">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {countries && countries.map((country) => (
                    <div className="card" key={country.name}>
                        <img src={country.flag} alt={country.name} className="w-full h-32 sm:h-48 object-cover"></img>
                        <h2 className="mt-3 mb-3 ml-2">{country.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;