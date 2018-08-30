import { StockItem } from "../models/stock";

export const STOCKS:StockItem[]=[
    new StockItem({Id:1, Name:"Epson L800 Roller" , SellingPrice:110, CostPrice:50, Quantity:2}),
    new StockItem({Id:2, Name:"Epson L100 Drums"  , SellingPrice:130, CostPrice:50, Quantity:2}),
    new StockItem({Id:3, Name:"Epson 200 Roller"  , SellingPrice:120, CostPrice:50, Quantity:2}),
    new StockItem({Id:4, Name:"Epson L800 Drums"  , SellingPrice:133, CostPrice:50, Quantity:2}),
    new StockItem({Id:5, Name:"Epson L100 Roller" , SellingPrice:144, CostPrice:50, Quantity:2}),
    new StockItem({Id:6, Name:"Epson 200 Drums"   , SellingPrice:102, CostPrice:50, Quantity:2}),
];