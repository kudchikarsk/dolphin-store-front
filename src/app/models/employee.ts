export class Employee implements IEmployee {
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;

    constructor(employee:IEmployee=null)
    {
        if(employee!=null) {
        this.Id      =employee.Id      ;
        this.Name    =employee.Name    ;
        this.Address =employee.Address ;
        this.Mobile  =employee.Mobile  ;
        this.Email   =employee.Email   ;
        }
    }

    update(edit: IEmployee):void {
        this.Id      =edit.Id      ;
        this.Name    =edit.Name    ;
        this.Address =edit.Address ;
        this.Mobile  =edit.Mobile  ;
        this.Email   =edit.Email   ;
    }
}

export interface IEmployee
{
    Id     :number;
    Name   :string;
    Address:string;
    Mobile :string;
    Email  :string;
}