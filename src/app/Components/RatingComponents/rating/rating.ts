export interface Rating {
    GameId: number,
    GameTitle: string,
    GamePhoto: string,
    GameDescription: string,
    TotalRating: string,
    TotalRatingFloat: number,
    UserGameRatings: UserGameRatings[],
    Subscribers: Subscribers[]
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
