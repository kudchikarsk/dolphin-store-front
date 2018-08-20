export class Client{  
  
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;

    constructor(
    id     :number=null,
    name   :string=null,
    address:string=null,
    mobile :string=null,
    email  :string=null,
    )
    {
        this.Id      =id      ;
        this.Name    =name    ;
        this.Address =address ;
        this.Mobile  =mobile  ;
        this.Email   =email   ;

    }

    copy(): Client {
        return new Client(
            this.Id     ,
            this.Name   ,
            this.Address,
            this.Mobile ,
            this.Email  
        );
      }

      update(edit: Client): any {
        this.Id      =edit.Id      ;
        this.Name    =edit.Name    ;
        this.Address =edit.Address ;
        this.Mobile  =edit.Mobile  ;
        this.Email   =edit.Email   ;
      }
}