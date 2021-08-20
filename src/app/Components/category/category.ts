export interface Category {
    id:number;
    type: string;
    description:string;

    games:Array<Game>;
}

export interface Game{
     title:string;
}