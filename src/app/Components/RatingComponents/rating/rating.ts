export interface Rating {
    GameId: number,
    GameTitle: string,
    GamePhoto: string,
    TotalRating: string,
    TotalRatingFloat: number,
    ReleaseDate: Date,
    IsReleased: boolean,
    UserGameRatings: UserGameRatings[],
    Subscribers: Subscribers[],
    GameCategories:Category[]
}

export interface UserGameRatings {
    UserGameRatingsId: number,
    UserId: number,
    UserName: string,
    Rating: number
}

export interface Subscribers {
    FirstName: string,
    LastName: string,
    UserName: string,
}

export interface Category{
    Type:string
}
