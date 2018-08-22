export class Employee{
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

    copy(): Employee {
        return new Employee(
            this.Id     ,
            this.Name   ,
            this.Address,
            this.Mobile ,
            this.Email  
        );
      }

      update(edit: Employee): any {
        this.Id      =edit.Id      ;
        this.Name    =edit.Name    ;
        this.Address =edit.Address ;
        this.Mobile  =edit.Mobile  ;
        this.Email   =edit.Email   ;
      }
}