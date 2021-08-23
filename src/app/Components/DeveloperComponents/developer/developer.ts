
export interface Developer{
    DeveloperId:number,
    FirstName:string,
    LastName:string,
    IsInstaGamesDev:boolean,
    DeveloperGames : DeveloperGames[]
}

 interface DeveloperGames{
    GameId:number,
    Title :string,
    Photo :string,
    Trailer :string,
    Description :string,
    Pegi :Pegi,
    ReleaseDate :Date,
    IsReleased :boolean,
    IsEarlyAccess :boolean,
    Rating:number,
    Tag :string
}

 interface Pegi{
    PegiId:number,
    PegiPhoto:string,
    PegiAge:number
}


