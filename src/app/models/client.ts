export class Client implements IClient{  
  
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;

    constructor(client:IClient=null)
    {
        if(client!=null) {
            this.Id      =client.Id      ;
            this.Name    =client.Name    ;
            this.Address =client.Address ;
            this.Mobile  =client.Mobile  ;
            this.Email   =client.Email   ;
        }
    }

    update(client: IClient):void {
        this.Id      =client.Id      ;
        this.Name    =client.Name    ;
        this.Address =client.Address ;
        this.Mobile  =client.Mobile  ;
        this.Email   =client.Email   ;
    }
}

export interface IClient
{
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;
}