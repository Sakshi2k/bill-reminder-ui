import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/service/bill.service';
import { Bill } from '../bill.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  // bills: Bill[] = [
  //   new Bill('Bill 1', "Some Bill", 'yes', '1101'),
  //   new Bill('Bill 2', "Some Bill", 'yes', '1102'),
  //   new Bill('Bill 3', "Some Bill", 'no', '1103')
  // ];

  public bills: Bill[] =[];

  constructor(private billService : BillService) {}

  ngOnInit(){
    this.getBills();
  }

  /**
   getBills()
   */
  public getBills() {
    this.billService.getBills().subscribe(
      (res: Bill[]) => {
        this.bills = res;
        console.log("Bills : "+ res);
      },
      (err: HttpErrorResponse) => {
        alert(`Error occurred : ${err.message}`);
        console.error(`Error occurred : ${err.message}`);
      }
    ) 
  }

  deleting(bill: Bill) {
    alert(`Deleting ${bill.billName}`)
  }
}
