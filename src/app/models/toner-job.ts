import { Client } from "./client";
import { Employee } from "./employee";
import { Toner } from "./toner";
import { PurchaseItem } from "./purchase-item";
import { iif } from "rxjs";

export class TonerJob implements ITonerJob {
        
    Id              :number        ;
    ClientId        :number        ;
    CollectedById   :number        ;
    DeliveredById   :number        ;
    Remarks         :string        ;
    OtherCharges    :number        ;
    Discount        :number        ;
    In              :Date          ;
    Out             :Date          ;
    Modified        :Date          ;
    Created         :Date          ;
    ClientName      :string        ;
    CollectedByName :string        ;
    DeliveredByName :string        ;
    Toners          :Toner[]       ;
    PurchasedItems  :PurchaseItem[];
    
    constructor(tonerJob:ITonerJob=null) {
        if(tonerJob!=null) {
            this.Id              = tonerJob.Id               ;
            this.ClientId        = tonerJob.ClientId         ;
            this.CollectedById   = tonerJob.CollectedById    ;
            this.DeliveredById   = tonerJob.DeliveredById    ;
            this.Remarks         = tonerJob.Remarks          ;
            this.OtherCharges    = tonerJob.OtherCharges     ;
            this.Discount        = tonerJob.Discount         ;
            this.In              = tonerJob.In               ;
            this.Out             = tonerJob.Out              ;
            this.Modified        = tonerJob.Modified         ;
            this.Created         = tonerJob.Created          ;
            this.ClientName      = tonerJob.ClientName       ;
            this.CollectedByName = tonerJob.CollectedByName  ;
            this.DeliveredByName = tonerJob.DeliveredByName  ;
            this.Toners          = tonerJob.Toners           ;
            this.PurchasedItems  = tonerJob.PurchasedItems   ;
        }
        else{
            this.Toners=[];
            this.PurchasedItems=[];
            this.OtherCharges = 0;
            this.Discount = 0;
            this.In=new Date();
            this.Out=new Date();
        }
    }

    updateAmount(target:number){
        this.Discount=0;
        this.OtherCharges=0;
        let grossTotal=this.grossTotal();
        var diff = target - grossTotal;
        if (diff < 0){
            this.Discount = Math.abs(diff) / grossTotal;
        }            
        else{
            this.OtherCharges = diff;
        }
            
    }

    updateClient(client: Client): void {    
        this.ClientId=client.Id;
        this.ClientName=client.Name;
    }

    updateCollectedBy(employee: Employee): void {
        this.CollectedById=employee.Id;
        this.CollectedByName=employee.Name;
    }

    updateDeliveredBy(employee: Employee): void {
        this.DeliveredById=employee.Id;
        this.DeliveredByName=employee.Name;
    }

    update(edit: ITonerJob): void {

        if(edit==null) throw new Error("edit value cannot be null!");

        this.Id              = edit.Id               ;
        this.ClientId        = edit.ClientId         ;
        this.CollectedById   = edit.CollectedById    ;
        this.DeliveredById   = edit.DeliveredById    ;
        this.Remarks         = edit.Remarks          ;
        this.OtherCharges    = edit.OtherCharges     ;
        this.Discount        = edit.Discount         ;
        this.In              = edit.In               ;
        this.Out             = edit.Out              ;
        this.Modified        = edit.Modified         ;
        this.Created         = edit.Created          ;
        this.ClientName      = edit.ClientName       ;
        this.CollectedByName = edit.CollectedByName  ;
        this.DeliveredByName = edit.DeliveredByName  ;
        this.Toners          = edit.Toners           ;
        this.PurchasedItems  = edit.PurchasedItems   ;
      }

    grossTotal(): number {
        if(this.PurchasedItems==null || this.PurchasedItems==undefined) return this.OtherCharges;
        return this.PurchasedItems.map(p=>p.StockItem.SellingPrice * p.Quantity).reduce((x,y) => x+y,0) + this.OtherCharges;
    }

    netTotal(): number {        
        let grossTotal=this.grossTotal();
        let total= Math.ceil(grossTotal - (this.Discount * grossTotal));
        return total;
    }

    purchaseCount():number {
        return this.PurchasedItems.map(p=>p.Quantity).reduce((x,y)=>x+y,0);
    }
}

export interface ITonerJob
{
    Id              :number        ;
    ClientId        :number        ;
    CollectedById   :number        ;
    DeliveredById   :number        ;
    Remarks         :string        ;
    OtherCharges    :number        ;
    Discount        :number        ;
    In              :Date          ;
    Out             :Date          ;
    Modified        :Date          ;
    Created         :Date          ;
    ClientName      :string        ;
    CollectedByName :string        ;
    DeliveredByName :string        ;
    Toners          :Toner[]       ;
    PurchasedItems  :PurchaseItem[];
}