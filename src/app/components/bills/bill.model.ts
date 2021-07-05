export class Bill {
    public billName : string;
    public billDesc : string;
    public billCode : string;
    public paid : boolean;
    public pastDue : boolean;
    public dueDate : string;
    public billType : string;


    constructor(billName : string, billDesc : string, paid : boolean, billCode : string,
        pastDue: boolean, billType: string, dueDate:string) {
        this.billName = billName;
        this.billDesc = billDesc;
        this.billCode = billCode;
        this.paid = paid;
        this.pastDue = pastDue;
        this.billType = billType;
        this.dueDate = dueDate;
    } 
}