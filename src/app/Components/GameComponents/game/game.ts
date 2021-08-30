export interface Game {
    GameId:number,
    Title :string,
    Photo :string,
    Trailer :string|any,
    Description :string,
    PegiId:number,
    Pegi :Pegi|number,
    ReleaseDate :Date,
    IsReleased :boolean,
    IsEarlyAccess :boolean,
    Rating:number,
    Tag :string,
    GameUrl :string|any,
    Categories:Category[],
    SelectedCategories:number[]|any,
    Developers:Developer[],
    SelectedDevelopers:number[]|any,
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