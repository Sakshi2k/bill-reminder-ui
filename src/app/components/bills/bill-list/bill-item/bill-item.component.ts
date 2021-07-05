import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bill } from '../../bill.model';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {

  // billName, billCode, paid, billDesc
  @Input() bill?:Bill;
  @Output() deleteRequest = new EventEmitter<Bill>();

  constructor() { 
  }

  ngOnInit(): void {
    // console.log("Bill"+ this.bill);
  }

  onDelete() {
    this.deleteRequest.emit(this.bill);
  }

}
