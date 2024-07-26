interface DestinationsInterface{

    id: number;
    country: string;
    city: string;
    tags: string[];
    continent: string,
    countryInShort: string;
    mustVisit:{
        place:string;
        description:string;
    }[];
}

export type {DestinationsInterface}