import { TonerJob } from "../models/toner-job";
import { Toner } from "../models/toner";
import { PurchaseItem } from "../models/purchase-item";
import { STOCKS } from "./mock-stocks";
import { TONERS } from "./mock-toners";

export const TONER_JOBS:TonerJob[]=[
    new TonerJob(1,1,1,1,"Changed Roller",20,0.2,new Date(),new Date(),new Date(),new Date(),"Mr. Nice","Spiderman","Spiderman",[TONERS[0]],[new PurchaseItem(1,2,STOCKS[0])]),
    new TonerJob(1,1,1,1,"Changed Drum",20,0.2,new Date(),new Date(),new Date(),new Date(),"Mr. Nice","Spiderman","Spiderman",[TONERS[1]],[new PurchaseItem(1,2,STOCKS[2])]),
    new TonerJob(1,1,1,1,"Serviceing",20,0.2,new Date(),new Date(),new Date(),new Date(),"Mr. Nice","Spiderman","Spiderman",[TONERS[2]],[new PurchaseItem(1,2,STOCKS[1])])
];