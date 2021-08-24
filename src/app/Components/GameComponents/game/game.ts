export interface Game {
    GameId:number,
    Title :string,
    Photo :string,
    Trailer :string,
    Description :string,
    Pegi :Pegi|number,
    ReleaseDate :Date,
    IsReleased :boolean,
    IsEarlyAccess :boolean,
    Rating:number,
    Tag :string,
    Categories:Category[],
    Developers:Developer[]
    GameDevelopers:number[]
    GameCategories:number[]
}

 interface Category{
    Type:string
}

 interface Developer{
    Name:string
}

export interface Pegi{
    PegiId:number,
    PegiPhoto:string,
    PegiAge:number
}