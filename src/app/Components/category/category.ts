export interface Category {
    id:number;
    Type: string;
    Description:string;

    Games:Array<Game>;
}

export interface Game{
     Title:string;
}