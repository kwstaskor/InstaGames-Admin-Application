export interface Message {
    MessageId: number,
    SubmitDate: Date,
    Text: string,
    Reply: string,
    Creator: Creator,
    Answered: boolean
}

export interface Creator {
    FirstName: string,
    LastName: string,
    UserName: string,
    Role: string,
    Email: string,
    SubscribePlan: string
    Photo: string
}