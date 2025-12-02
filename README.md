## API Overview
This api provides a collection of movies, tv-shows and actors, including biographies and other usefull informations. 
It provides complete and up-to-date data for over 9 million film title (movies, series and episodes) with over 10 million actors and cast members. 



## Version
API Version: v1 (current)

## Available Endpoints
### Titles
- **/titles:** returns array of **titles** according to filters/ sorting query
- **/x/titles-by-ids**: returns array of titles according to array of id's provided
- **/titles/{id}**: returns title according to filters / sorting query parameters provided
- **/titles/{id}/ratings**: returns title rating and votes number
- **/titles/series/{id}**: returns array of episodes only with episode id, episode number and season number in ascending order
- **/titles/season/{id}**: returns number of seasons for the series
- **/titles/series/{id}/{season}**: returns array of episodes only with episode id, season number and episode number (only of the season provided in path)
- **/titles/episode/{id}**: returns episode according to filters or sorting query parameter provided
- **/titles/x/upcoming**: returns array of **upcoming** titles according to filters / sorting query

### Search
- **/titles/search/keyword/{keyword}**: retruns an array of titles according to sorting param and the **keyword** provided in path
- **/titles/search/title/{title}**: returns an array of **titles** according to filter
- **/titles/search/akas/{akas}**: returns an array of titles according to filters an the **aka** provided in path, works for exact matches

### Actors
- **/actors**: returns array of actors accoring to filters provided
- **/actors/{id}**: returns actors details

### Utils
- **/title/utils/titleType**: returns array of title **types**
- **/title/utils/titleType**: returns array of **genres**
- **/title/utils/lists**: returns array of **lists** (for 'list' query parameter)


## Request and Response Format
#### Example of request format using Axios:
```js
    const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/%7Bid%7D',
  headers: {
    'x-rapidapi-key': '1d126a9ca4msh2f35b87c990ca83p1cf890jsn9fc2b392eb3e',
    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}

fetchData();
```

#### Example of response
status: 200

## Authentication

## Error handling
Error handling in your code and how to handle them

## Usage Limits and Best Practices
Outline usage limites here (eg. rate limits) and recommendations for effectivly using the API
