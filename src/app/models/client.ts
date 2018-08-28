export class Client implements IClient{  
  
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;
    LastTransaction:Date;

    constructor(client:IClient=null)
    {
        if(client!=null) {
            this.Id      =client.Id      ;
            this.Name    =client.Name    ;
            this.Address =client.Address ;
            this.Mobile  =client.Mobile  ;
            this.Email   =client.Email   ;
            this.LastTransaction=client.LastTransaction;
        }
    }

      update(client: IClient): any {
        this.Id      =client.Id      ;
        this.Name    =client.Name    ;
        this.Address =client.Address ;
        this.Mobile  =client.Mobile  ;
        this.Email   =client.Email   ;
        this.LastTransaction=client.LastTransaction
      }
}

export interface IClient
{
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;
    LastTransaction:Date;
}