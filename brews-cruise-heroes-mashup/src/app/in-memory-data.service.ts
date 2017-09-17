import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const hotsprings = [
      { 
        id: 1, 
        name: 'Pagosa Springs',
        address: '165 Hot Springs Blvd, Pagosa Springs, CO 81147',
        latitude: '37.263',
        longitude: '-107.011',
        temperature: '136°',
        hotspringsLink: 'https://www.pagosahotsprings.com',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Pagosa+Springs%2C+CO+81147'
      },
      { 
        id: 2, 
        name: 'Salida Hot Springs',
        address: '410 W Rainbow Blvd, Salida, CO 81201', 
        latitude: '38.498', 
        longitude: '-106.076', 
        temperature: '160°',
        hotspringsLink: 'http://salidarec.com/public-pool',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Salida%2C+CO+81201' 
      },
      { 
        id: 3, 
        name: 'Ouray Hot Springs',
        address: '1220 Main St, Ouray, CO 81427', 
        latitude: '38.021', 
        longitude: '-107.672', 
        temperature: '156°',
        hotspringsLink: 'http://ourayhotsprings.com/',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Ouray%2C+CO+81427' 
      },
      { 
        id: 4, 
        name: 'Idaho Springs',
        address: '302 Soda Creek Rd, Idaho Springs, CO 80452', 
        latitude: '39.739', 
        longitude: '-105.512', 
        temperature: '115°',
        hotspringsLink: 'http://www.indianhotsprings.com',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?find_desc=breweries&find_loc=Idaho+Springs,+CO' 
      },
      { 
        id: 5, 
        name: 'Glenwood Springs',
        address: '401 N River St, Glenwood Springs, CO 81601', 
        latitude: '39.548', 
        longitude: '-107.322', 
        temperature: '124°',
        hotspringsLink: 'http://www.hotspringspool.com',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?find_desc=breweries&find_loc=Glenwood+Springs,+CO' 
      },
      { 
        id: 6, 
        name: 'Strawberry Park Hot Springs',
        address: '44200 County Road #36, Steamboat Springs, CO 80487', 
        latitude: '40.559', 
        longitude: '-106.851', 
        temperature: '104°',
        hotspringsLink: 'http://strawberryhotsprings.com/',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Steamboat+Springs%2C+CO+80487' 
      },
    ];
    return {hotsprings};
  }
}