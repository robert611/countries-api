import useFetch from './useFetch';

const Home = () => {
    const {data: countries, isPending, error} = useFetch('https://restcountries.eu/rest/v2/all')
    
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
        </div>
    );
}
 
export default Home;