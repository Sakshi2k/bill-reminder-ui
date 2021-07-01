import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../bill.model';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {

  // billName, billCode, paid, billDesc
  @Input() bill?:Bill;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.bill);
  }

}
