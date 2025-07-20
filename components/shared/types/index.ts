export interface Product {
    [x: string]: any;
    
    id: number;
    title: string;
    price: number;
    description:string;
    category:{
        id: number;
        name: string;
        image: string;
    }
}