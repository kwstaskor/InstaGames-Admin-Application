export interface Rating{
    GameId: number,
    GameTitle: string,
    GamePhoto: string,
    GameDescription: string,
    TotalRating: string,
    TotalRatingFloat: number,
    UserGameRatings: UserGameRatings[]
}

export interface UserGameRatings{
    UserGameRatingsId: number,
    UserId: number,
    UserName: string,
    Rating: number
}

