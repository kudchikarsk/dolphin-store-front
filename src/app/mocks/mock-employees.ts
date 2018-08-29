import { Employee } from "../models/employee";

export const EMPLOYEES:Employee[]=[
    new Employee({Id:1,Name:"Dr Strange"     ,Address:"New York"        , Mobile:"9999999", Email:"strange@gmail.com"}),
    new Employee({Id:2,Name:"Spiderman"      ,Address:"New York"        , Mobile:"9999999", Email:"spider@gmail.com" }),
    new Employee({Id:3,Name:"Captain America",Address:"Queens, New York", Mobile:"9999999", Email:"america@gmail.com"}),
    new Employee({Id:4,Name:"Ironman"        ,Address:"New York"        , Mobile:"9999999", Email:"stark@gmail.com"  }),
];