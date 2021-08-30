export interface User{
    Id:string,
    UserName: string,
    Email: string,
    Role: string | Role,
    RoleId: string | Role,
    Roles:any[],
    DateOfBirth: Date,
    FirstName: string,
    LastName: string,
    PhotoUrl: string,
    SubscribePlan: Plan|string,
    SubscriptionDay: Date,
    IsSubscribed: boolean,
    ExpireDate: Date,
    RegistrationDate: Date,
    EmailConfirmed: boolean,
}

enum Plan{
    Basic = 'Basic',
    Premium = 'Premium'
}

export interface Role{
    Id:string|any;
    Name: string|any;
}