import { PartType, TonerPart, Stock } from "../models/stock";

export const PARTS:PartType[]=[
    {Id:1, Name:"Roller"},
    {Id:2, Name:"Gears"},
    {Id:3, Name:"Drum"},
];

export const TONER_PARTS:TonerPart[]=[
    {Id:1, Name:"Epson L800" , PartTypeId:1},
    {Id:2, Name:"Epson L100" , PartTypeId:1},
    {Id:3, Name:"Epson 200"  , PartTypeId:1},
    {Id:4, Name:"Epson L800" , PartTypeId:2},
    {Id:5, Name:"Epson L100" , PartTypeId:3},
    {Id:6, Name:"Epson 200"  , PartTypeId:3},
];

export const STOCKS:Stock[]=[
    {Id:1, Name:"Epson L800" , TonerPartId:1, UnitPrice:0, UnitSellingPrice:0, Quantity: 2},
    {Id:2, Name:"Epson L100" , TonerPartId:1, UnitPrice:0, UnitSellingPrice:0, Quantity: 2},
    {Id:3, Name:"Epson 200"  , TonerPartId:1, UnitPrice:0, UnitSellingPrice:0, Quantity: 2},
    {Id:4, Name:"Epson L800" , TonerPartId:2, UnitPrice:0, UnitSellingPrice:0, Quantity: 2},
    {Id:5, Name:"Epson L100" , TonerPartId:3, UnitPrice:0, UnitSellingPrice:0, Quantity: 2},
    {Id:6, Name:"Epson 200"  , TonerPartId:3, UnitPrice:0, UnitSellingPrice:0, Quantity: 2},
];