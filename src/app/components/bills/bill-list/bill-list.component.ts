import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  bills: Bill[] = [
    new Bill('Bill 1', "Some Bill", 'yes', '1101'),
    new Bill('Bill 2', "Some Bill", 'yes', '1102'),
    new Bill('Bill 3', "Some Bill", 'no', '1103')
  ];
  
  constructor() { }

  ngOnInit(): void {
    // console.log(this.bills)
  }

}
