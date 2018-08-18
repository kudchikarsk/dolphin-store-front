import { TonerPart, StockItem } from "../models/stock";

export const TONER_PARTS:TonerPart[]=[
    {Id:2, Name:"Epson L100 Roller" },
    {Id:3, Name:"Epson 200 drums"  },
    {Id:4, Name:"Epson L800 Rollers" },
    {Id:1, Name:"Epson L800 Gears" },
    {Id:5, Name:"Epson L100 roller" },
    {Id:6, Name:"Epson 200 drums"  },
];

export const STOCKS:StockItem[]=[
    {Id:1, Name:"Epson L800" , TonerPartId:1, CostPrice:0, SellingPrice:0, Quantity: 2},
    {Id:2, Name:"Epson L100" , TonerPartId:1, CostPrice:0, SellingPrice:0, Quantity: 2},
    {Id:3, Name:"Epson 200"  , TonerPartId:1, CostPrice:0, SellingPrice:0, Quantity: 2},
    {Id:4, Name:"Epson L800" , TonerPartId:2, CostPrice:0, SellingPrice:0, Quantity: 2},
    {Id:5, Name:"Epson L100" , TonerPartId:3, CostPrice:0, SellingPrice:0, Quantity: 2},
    {Id:6, Name:"Epson 200"  , TonerPartId:3, CostPrice:0, SellingPrice:0, Quantity: 2},
];