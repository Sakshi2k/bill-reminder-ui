import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Bill } from './bill.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
