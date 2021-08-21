export interface Category {
    CategoryId:number;
    Type: string;
    Description:string;

    Games:Array<Game>;
}

export interface Game{
     Title:string;
}