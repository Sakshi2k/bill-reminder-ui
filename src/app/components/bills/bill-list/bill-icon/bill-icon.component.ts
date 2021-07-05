import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-icon',
  templateUrl: './bill-icon.component.html',
  styleUrls: ["./bill-icon.component.css"]
})
export class BillIconComponent implements OnInit {

  @Input()imgType: String ='';
  imgUrl: String = 'assets/images/other.png';

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.imgUrl = `assets/images/${this.imgType}.png`;
  }

}
