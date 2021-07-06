export interface Bill {
    id: number;
    billName : string;
    billDesc : string;
    billCode : string;
    amount : number;
    paid : boolean;
    pastDue : boolean;
    dueDate : string;
    billType : string;
}