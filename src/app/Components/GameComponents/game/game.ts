export interface Game {
    GameId:number,
    Title :string,
    Photo :string,
    Trailer :string|any,
    Description :string,
    Pegi :Pegi|number,
    ReleaseDate :Date,
    IsReleased :boolean,
    IsEarlyAccess :boolean,
    Rating:number,
    Tag :string,
    GameUrl :string,
    Categories:Category[],
    Developers:Developer[],
    GameDevelopers:Developer[]|any,
    GameCategories:Category[]
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