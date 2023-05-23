enum Condition {
    sale = "sale",
    sold = "sold",
}


type Flat = {
    flatNum: number;
    floor: number;
    livingArea: number;
    balconies: number[];
    bedrooms: number[];
    wetPoints: number[];
    price: number;
    condition: Condition;
    points: string;
}