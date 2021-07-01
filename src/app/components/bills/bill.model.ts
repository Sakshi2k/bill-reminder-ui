export class Bill {
    public billName : string;
    public billDesc : string;
    public billCode : string;
    public paid : string;
    // this.pastDue = pastDue;

    constructor(billName : string, billDesc : string, paid : string, billCode : string) {
        this.billName = billName;
        this.billDesc = billDesc;
        this.billCode = billCode;
        this.paid = paid;
    } 
}