export interface Game {
    GameId:number
    Title :string,
    Photo :string,
    Trailer :string,
    Description :string,
    Pegi :string,
    ReleaseDate :Date,
    IsReleased :boolean,
    IsEarlyAccess :boolean,
    Rating :number,
    Tag :string,
    Categories:Category[],
    Developers:Developer[]
}

export interface Category{
    Type:string
}

export interface Developer{
    Name:string
}