export interface User{
    Id:string,
    UserName: string,
    Email: string,
    Role: string,
    FirstName: string,
    LastName: string,
    PhotoUrl: string,
    SubscribePlan: Plan,
    SubscriptionDay: Date,
    IsSubscribed: boolean,
    ExpireDate: Date,
    RegistrationDate: Date
}

enum Plan{
    Basic = 'Basic',
    Premium = 'Premium'
}