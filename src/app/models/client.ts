export class Client{  
  
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;
    LastTransaction:Date;

    constructor(
    id     :number=null,
    name   :string=null,
    address:string=null,
    mobile :string=null,
    email  :string=null,
    lastTransaction:Date=null
    )
    {
        this.Id      =id      ;
        this.Name    =name    ;
        this.Address =address ;
        this.Mobile  =mobile  ;
        this.Email   =email   ;
        this.LastTransaction=lastTransaction;

    }

    copy(): Client {
        return new Client(
            this.Id     ,
            this.Name   ,
            this.Address,
            this.Mobile ,
            this.Email  ,
            this.LastTransaction
        );
      }

      update(edit: Client): any {
        this.Id      =edit.Id      ;
        this.Name    =edit.Name    ;
        this.Address =edit.Address ;
        this.Mobile  =edit.Mobile  ;
        this.Email   =edit.Email   ;
        this.LastTransaction=edit.LastTransaction
      }
}