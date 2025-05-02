export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description?: string;
  featuredAttractions: string[];
}

export const popularDestinations: Destination[] = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Known as the City of Love, Paris offers countless attractions, from the iconic Eiffel Tower to the Louvre Museum and charming cafés.",
    featuredAttractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"]
  },
  {
    id: 2,
    name: "Santorini",
    country: "Greece",
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters, Santorini is a picture-perfect destination.",
    featuredAttractions: ["Oia Village", "Fira", "Red Beach"]
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A fascinating blend of traditional and ultramodern, Tokyo offers visitors a unique experience with its vibrant culture and cuisine.",
    featuredAttractions: ["Shibuya Crossing", "Tokyo Skytree", "Meiji Shrine"]
  },
  {
    id: 4,
    name: "Rome",
    country: "Italy",
    image: "https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The Eternal City is home to ancient ruins, Renaissance art, and delicious cuisine that will delight history buffs and foodies alike.",
    featuredAttractions: ["Colosseum", "Roman Forum", "Vatican City"]
  },
  {
    id: 5,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs, Bali is a paradise for relaxation and adventure.",
    featuredAttractions: ["Ubud", "Uluwatu Temple", "Kuta Beach"]
  },
  {
    id: 6,
    name: "New York City",
    country: "United States",
    image: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The Big Apple offers something for everyone with its iconic skyline, diverse neighborhoods, world-class museums, and Broadway shows.",
    featuredAttractions: ["Times Square", "Central Park", "Empire State Building"]
  },
  {
    id: 7,
    name: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A city of superlatives, Dubai is known for its luxury shopping, ultramodern architecture, and lively nightlife scene.",
    featuredAttractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"]
  },
  {
    id: 8,
    name: "Sydney",
    country: "Australia",
    image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Surrounded by beautiful harbors, beaches, and parks, Sydney is a vibrant city known for its iconic Opera House and Harbor Bridge.",
    featuredAttractions: ["Sydney Opera House", "Bondi Beach", "Sydney Harbour Bridge"]
  },
  {
    id: 9,
    name: "Barcelona",
    country: "Spain",
    image: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Known for its art and architecture, Barcelona is home to the iconic works of Antoni Gaudí, as well as beautiful beaches and vibrant street life.",
    featuredAttractions: ["Sagrada Familia", "Park Güell", "La Rambla"]
  },
  {
    id: 10,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "This ancient Incan citadel set high in the Andes Mountains is one of the most breathtaking archaeological sites in the world.",
    featuredAttractions: ["Incan Ruins", "Huayna Picchu", "Sun Gate"]
  },
  {
    id: 11,
    name: "Cairo",
    country: "Egypt",
    image: "https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Home to the ancient Pyramids of Giza and the Sphinx, Cairo offers a glimpse into one of the world's oldest civilizations.",
    featuredAttractions: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"]
  },
  {
    id: 12,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "With crystal clear waters, overwater bungalows, and pristine beaches, the Maldives is the ultimate tropical paradise.",
    featuredAttractions: ["Overwater Bungalows", "Coral Reefs", "Marine Life"]
  },
  {
    id: 13,
    name: "Cox's Bazar",
    country: "Bangladesh",
    image: "https://images.pexels.com/photos/1486882/pexels-photo-1486882.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Home to the world's longest natural sandy beach, Cox's Bazar is a popular tourist destination in Bangladesh.",
    featuredAttractions: ["Inani Beach", "Himchari National Park", "Marine Drive"]
  },
  {
    id: 14,
    name: "Sundarbans",
    country: "Bangladesh",
    image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The largest mangrove forest in the world, home to the Royal Bengal Tiger and numerous other wildlife species.",
    featuredAttractions: ["Mangrove Forest", "Wildlife Spotting", "Boat Tours"]
  },
  {
    id: 15,
    name: "Bandarban",
    country: "Bangladesh",
    image: "https://images.pexels.com/photos/2646235/pexels-photo-2646235.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Known for its beautiful hills, tribal culture, and Buddhist temples, Bandarban is a picturesque destination in Bangladesh.",
    featuredAttractions: ["Nilgiri Hills", "Nafakhum Waterfall", "Buddha Dhatu Jadi"]
  }
];

// Add 35+ more destinations to meet the 50+ requirement
export const allDestinations: Destination[] = [
  ...popularDestinations,
  {
    id: 16,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Fushimi Inari Shrine", "Kinkaku-ji", "Arashiyama Bamboo Grove"]
  },
  {
    id: 17,
    name: "Venice",
    country: "Italy",
    image: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Grand Canal", "St. Mark's Square", "Rialto Bridge"]
  },
  {
    id: 18,
    name: "Prague",
    country: "Czech Republic",
    image: "https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Prague Castle", "Charles Bridge", "Old Town Square"]
  },
  {
    id: 19,
    name: "Rio de Janeiro",
    country: "Brazil",
    image: "https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain"]
  },
  {
    id: 20,
    name: "Amsterdam",
    country: "Netherlands",
    image: "https://images.pexels.com/photos/1010584/pexels-photo-1010584.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Canal Cruise", "Van Gogh Museum", "Anne Frank House"]
  },
  {
    id: 21,
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Jemaa el-Fnaa", "Bahia Palace", "Majorelle Garden"]
  },
  {
    id: 22,
    name: "Hong Kong",
    country: "China",
    image: "https://images.pexels.com/photos/552113/pexels-photo-552113.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Victoria Peak", "Hong Kong Disneyland", "Temple Street Night Market"]
  },
  {
    id: 23,
    name: "Kuala Lumpur",
    country: "Malaysia",
    image: "https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Petronas Twin Towers", "Batu Caves", "Central Market"]
  },
  {
    id: 24,
    name: "Budapest",
    country: "Hungary",
    image: "https://images.pexels.com/photos/732057/pexels-photo-732057.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Parliament Building", "Buda Castle", "Thermal Baths"]
  },
  {
    id: 25,
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Table Mountain", "Cape of Good Hope", "Robben Island"]
  },
  {
    id: 26,
    name: "Istanbul",
    country: "Turkey",
    image: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"]
  },
  {
    id: 27,
    name: "Seoul",
    country: "South Korea",
    image: "https://images.pexels.com/photos/2246790/pexels-photo-2246790.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Gyeongbokgung Palace", "N Seoul Tower", "Myeongdong"]
  },
  {
    id: 28,
    name: "London",
    country: "United Kingdom",
    image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Big Ben", "Tower of London", "Buckingham Palace"]
  },
  {
    id: 29,
    name: "Singapore",
    country: "Singapore",
    image: "https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Island"]
  },
  {
    id: 30,
    name: "Vienna",
    country: "Austria",
    image: "https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Vienna State Opera"]
  },
  {
    id: 31,
    name: "Dubrovnik",
    country: "Croatia",
    image: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["City Walls", "Old Town", "Lokrum Island"]
  },
  {
    id: 32,
    name: "Bangkok",
    country: "Thailand",
    image: "https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Grand Palace", "Wat Arun", "Chatuchak Market"]
  },
  {
    id: 33,
    name: "Cusco",
    country: "Peru",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Machu Picchu", "Sacred Valley", "Sacsayhuamán"]
  },
  {
    id: 34,
    name: "Queenstown",
    country: "New Zealand",
    image: "https://images.pexels.com/photos/313032/pexels-photo-313032.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Milford Sound", "Skyline Gondola", "Bungy Jumping"]
  },
  {
    id: 35,
    name: "Lisbon",
    country: "Portugal",
    image: "https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Belém Tower", "Jerónimos Monastery", "Alfama District"]
  },
  {
    id: 36,
    name: "Vancouver",
    country: "Canada",
    image: "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Stanley Park", "Granville Island", "Capilano Suspension Bridge"]
  },
  {
    id: 37,
    name: "Stockholm",
    country: "Sweden",
    image: "https://images.pexels.com/photos/119803/pexels-photo-119803.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Gamla Stan", "Vasa Museum", "Stockholm Palace"]
  },
  {
    id: 38,
    name: "Havana",
    country: "Cuba",
    image: "https://images.pexels.com/photos/14782126/pexels-photo-14782126.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Old Havana", "El Capitolio", "Malecón"]
  },
  {
    id: 39,
    name: "Reykjavik",
    country: "Iceland",
    image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Golden Circle", "Blue Lagoon", "Northern Lights"]
  },
  {
    id: 40,
    name: "Edinburgh",
    country: "Scotland",
    image: "https://images.pexels.com/photos/45911/castle-scotland-edinburgh-edinburgh-castle-45911.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Edinburgh Castle", "Royal Mile", "Arthur's Seat"]
  },
  {
    id: 41,
    name: "Dublin",
    country: "Ireland",
    image: "https://images.pexels.com/photos/2412978/pexels-photo-2412978.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Guinness Storehouse", "Trinity College", "Temple Bar"]
  },
  {
    id: 42,
    name: "San Francisco",
    country: "United States",
    image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf"]
  },
  {
    id: 43,
    name: "Florence",
    country: "Italy",
    image: "https://images.pexels.com/photos/1105371/pexels-photo-1105371.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Uffizi Gallery", "Cathedral of Santa Maria del Fiore", "Ponte Vecchio"]
  },
  {
    id: 44,
    name: "Mumbai",
    country: "India",
    image: "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"]
  },
  {
    id: 45,
    name: "St. Petersburg",
    country: "Russia",
    image: "https://images.pexels.com/photos/1557544/pexels-photo-1557544.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Hermitage Museum", "Church of the Savior on Spilled Blood", "Peterhof Palace"]
  },
  {
    id: 46,
    name: "Auckland",
    country: "New Zealand",
    image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Sky Tower", "Waiheke Island", "Auckland Harbor Bridge"]
  },
  {
    id: 47,
    name: "Mexico City",
    country: "Mexico",
    image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Frida Kahlo Museum", "Zócalo", "Teotihuacan"]
  },
  {
    id: 48,
    name: "Berlin",
    country: "Germany",
    image: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Brandenburg Gate", "Berlin Wall Memorial", "Museum Island"]
  },
  {
    id: 49,
    name: "Athens",
    country: "Greece",
    image: "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Acropolis", "Parthenon", "Plaka"]
  },
  {
    id: 50,
    name: "Jerusalem",
    country: "Israel",
    image: "https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredAttractions: ["Western Wall", "Church of the Holy Sepulchre", "Mount of Olives"]
  }
];