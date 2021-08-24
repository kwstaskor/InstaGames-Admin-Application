export interface Message {
    MessageId: number,
    SubmitDate: Date,
    Text: string,
    Creator: Creator

}

export interface Creator {
    FirstName: string,
    LastName: string,
    UserName: string,
    Email: string,
    SubscribePlan: string
}