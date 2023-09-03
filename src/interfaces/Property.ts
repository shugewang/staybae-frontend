interface PropertyType {
    _id?: string;
    city: string;
    country: string;
    region: string;
    description: string;
    caption?: string;
    rating: number;
    numVotes: number;
    perNightPrice: number;
    totalPrice: number;
    dateFrom: string;
    dateTo: string;
    numRooms: number;
    numBeds: number;
    numToilets: number;
    sharedProperty: boolean;
    heroImg: string;
    images: string[];
    favourited?: boolean;
    lat: number;
    lon: number;
}

export default PropertyType;