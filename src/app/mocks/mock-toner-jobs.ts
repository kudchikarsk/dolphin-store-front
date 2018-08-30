import { TonerJob } from "../models/toner-job";
import { Toner } from "../models/toner";
import { PurchaseItem } from "../models/purchase-item";
import { STOCKS } from "./mock-stocks";
import { TONERS } from "./mock-toners";

export const TONER_JOBS:TonerJob[]=[
    new TonerJob({Id:1, ClientId: 1, CollectedById:1, DeliveredById:1,Remarks:"Changed Roller",OtherCharges:20,Discount:0.2,In:new Date(),Out:new Date(),Created :new Date(),Modified:new Date(),ClientName:"Mr. Nice", CollectedByName: "Spiderman", DeliveredByName: "Spiderman", Toners:[TONERS[0]], PurchasedItems:[new PurchaseItem(1,2,STOCKS[0])]}),
    new TonerJob({Id:1, ClientId: 1, CollectedById:1, DeliveredById:1,Remarks:"Changed Drum"  ,OtherCharges:20,Discount:0.2,In:new Date(),Out:new Date(),Created :new Date(),Modified:new Date(),ClientName:"Mr. Nice", CollectedByName: "Spiderman", DeliveredByName: "Spiderman", Toners:[TONERS[1]], PurchasedItems:[new PurchaseItem(1,2,STOCKS[2])]}),
    new TonerJob({Id:1, ClientId: 1, CollectedById:1, DeliveredById:1,Remarks:"Serviceing"    ,OtherCharges:20,Discount:0.2,In:new Date(),Out:new Date(),Created :new Date(),Modified:new Date(),ClientName:"Mr. Nice", CollectedByName: "Spiderman", DeliveredByName: "Spiderman", Toners:[TONERS[2]], PurchasedItems:[new PurchaseItem(1,2,STOCKS[1])]})
];