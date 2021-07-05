import { Component, OnInit, Output } from '@angular/core';
import { BillService } from 'src/app/service/bill.service';
import { Bill } from '../bill.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  public bills: Bill[] =[];
  public displayBills: Bill[] =[];

  constructor(private billService : BillService) {}

  ngOnInit(){
    this.getBills();
  }
  
  ngOnChanges() {
    this.displayBills = this.bills;
  }

  /*
  * @desc Function to get all bills
  */
  public getBills() {
    this.billService.getBills().subscribe(
      (res: Bill[]) => {
        this.bills = res;
        this.displayBills = res;
      },
      (err: HttpErrorResponse) => {
        alert(`Error occurred : ${err.message}`);
        console.error(`Error occurred : ${err.message}`);
      }
    ) 
    console.info("Displaying All Bills");
  }

  /*
  * @desc Function to get bills with payment due
  */
  public async displayAllBills() {
    // this.displayBills = this.bills;
    this.displayBills = this.bills.filter( bill => {
      return bill
   });
  }

  /*
  * @desc Function to get bills with payment due
  */
  public async filterBillsByDue() {
    this.displayBills = this.bills.filter( bill => {
      return bill.paid === false;
   });
   console.info("Displaying Bills Due");
  }

  /*
  * @desc Function to get bills with past payment due
  */
  public async filterBillsByPastDue() {
    // let newBillsList: Bill[]= [];

    this.displayBills = this.bills.filter( bill => {
      return bill.pastDue === true;
    });
   console.info("Displaying Bills Past Due");
  }
  
  /*
  * @desc Function to get bills paid
  */
  public filterBillsByPaid() {
    this.displayBills = this.bills.filter( bill => {
      return bill.paid === true;
   });
   console.info("Displaying Bills Paid");
  }

  deleting(bill: Bill) {
    alert(`Deleting ${bill.billName}`)
  }
}
