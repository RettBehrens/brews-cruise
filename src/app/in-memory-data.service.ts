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
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Pagosa+Springs%2C+CO+81147',
        imgUrl: 'http://www.colorado.com/sites/default/master/files/styles/16-9-large-640-360/public/DPP_0007%20%284%29.JPG?itok=cL-7lFVD'
      },
      { 
        id: 2, 
        name: 'Salida Hot Springs',
        address: '410 W Rainbow Blvd, Salida, CO 81201', 
        latitude: '38.498', 
        longitude: '-106.076', 
        temperature: '160°',
        hotspringsLink: 'http://salidarec.com/public-pool',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Salida%2C+CO+81201',
        imgUrl: 'https://www.uncovercolorado.com/wp-content/uploads/2013/12/Salida-Hot-Springs-Pool-CO.jpg' 
      },
      { 
        id: 3, 
        name: 'Ouray Hot Springs',
        address: '1220 Main St, Ouray, CO 81427', 
        latitude: '38.021', 
        longitude: '-107.672', 
        temperature: '156°',
        hotspringsLink: 'http://ourayhotsprings.com/',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Ouray%2C+CO+81427',
        imgUrl: 'http://www.colorado.com/sites/default/master/files/Ouray_15_MikeBoruta.jpg' 
      },
      { 
        id: 4, 
        name: 'Idaho Springs',
        address: '302 Soda Creek Rd, Idaho Springs, CO 80452', 
        latitude: '39.739', 
        longitude: '-105.512', 
        temperature: '115°',
        hotspringsLink: 'http://www.indianhotsprings.com',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?find_desc=breweries&find_loc=Idaho+Springs,+CO',
        imgUrl: 'http://www.indianhotsprings.com/wp-content/uploads/2015/04/Front-page-pool-2.jpg' 
      },
      { 
        id: 5, 
        name: 'Glenwood Springs',
        address: '401 N River St, Glenwood Springs, CO 81601', 
        latitude: '39.548', 
        longitude: '-107.322', 
        temperature: '124°',
        hotspringsLink: 'http://www.hotspringspool.com',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?find_desc=breweries&find_loc=Glenwood+Springs,+CO',
        imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/01/7c/47/18/soak-your-bones-in-the.jpg' 
      },
      { 
        id: 6, 
        name: 'Strawberry Park Hot Springs',
        address: '44200 County Road #36, Steamboat Springs, CO 80487', 
        latitude: '40.559', 
        longitude: '-106.851', 
        temperature: '104°',
        hotspringsLink: 'http://strawberryhotsprings.com/',
        nearbyBreweriesOnYelp: 'https://www.yelp.com/search?cflt=breweries&find_loc=Steamboat+Springs%2C+CO+80487',
        imgUrl: 'http://www.steamboatchamber.com/media/26631/Strawberry-Park-Hot-Springs.jpg' 
      },
      { 
        id: 7, 
        name: 'Dexter Spring',
        address: '---', 
        latitude: '37.294', 
        longitude: '-105.784', 
        temperature: '68°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 8, 
        name: 'Shaw Springs',
        address: '---', 
        latitude: '37.751', 
        longitude: '-106.317', 
        temperature: '86°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 9, 
        name: 'Wagon Wheel Gap Hot Springs',
        address: '---', 
        latitude: '37.747', 
        longitude: '-106.831', 
        temperature: '135°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 10, 
        name: 'Rainbow Hot Springs',
        address: '---', 
        latitude: '37.511', 
        longitude: '-106.945', 
        temperature: '104°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 11, 
        name: 'Stinking Springs',
        address: '---', 
        latitude: '37.033', 
        longitude: '-106.805', 
        temperature: '81°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 12, 
        name: 'Antelope Spring',
        address: '---', 
        latitude: '37.741', 
        longitude: '-107.034', 
        temperature: '90°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 13, 
        name: 'Birdsie Warm Spring',
        address: '---', 
        latitude: '37.728', 
        longitude: '-107.054', 
        temperature: '86°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 14, 
        name: 'Pinkerton Hot Springs',
        address: '---', 
        latitude: '37.453', 
        longitude: '-107.803', 
        temperature: '90°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 15, 
        name: 'Tripp Hot Springs',
        address: '---', 
        latitude: '37.400', 
        longitude: '-107.849', 
        temperature: '111°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 16, 
        name: 'Mount Princeton Hot Springs',
        address: '---', 
        latitude: '38.733', 
        longitude: '-106.162', 
        temperature: '133°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
      { 
        id: 17, 
        name: 'Orvis Hot Spring',
        address: '---', 
        latitude: '38.133', 
        longitude: '-107.736', 
        temperature: '126°',
        hotspringsLink: '---',
        nearbyBreweriesOnYelp: '---',
        imgUrl: '' 
      },
    ];
    return {hotsprings};
  }
}