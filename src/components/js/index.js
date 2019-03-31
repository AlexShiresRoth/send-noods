import  Search  from './search/Search';
import renderLoader from './search/Loader';


export const restaurantSearch = async (location) => {
    if(location){
        const searchRamen = new Search(location);

        renderLoader();

        await searchRamen.findSpots();

        const resultsList = searchRamen.resultsArr;

        return resultsList;
    }
}

