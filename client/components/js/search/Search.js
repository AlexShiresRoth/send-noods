import axios from "axios";
import { api_key } from "../../../../config/keys";

export default class Search {
  constructor(location) {
    this.location = location;

    this.resultsArr = [];
  }

  async findSpots() {
    const key = api_key;
    const crossOrigin = "https://secret-ocean-49799.herokuapp.com/";
    try {
      const response = await axios.get(
        `${crossOrigin}https://maps.googleapis.com/maps/api/place/textsearch/json?query=ramen+restaurants+in+${
          this.location
        }&key=${key}`
      );
      this.results = response.data.results;
      this.results.forEach(val => {
        return this.resultsArr.push(val);
      });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }
}
