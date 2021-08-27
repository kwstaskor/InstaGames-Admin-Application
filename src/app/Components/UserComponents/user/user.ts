export interface User{
    Id:string,
    UserName: string,
    Email: string,
    Role: string,
    FirstName: string,
    LastName: string,
    PhotoUrl: string,
    SubscribePlan: Plan|string,
    SubscriptionDay: Date,
    IsSubscribed: boolean,
    ExpireDate: Date,
    RegistrationDate: Date,
    EmailConfirmed: boolean
}

enum Plan{
    Basic = 'Basic',
    Premium = 'Premium'
}