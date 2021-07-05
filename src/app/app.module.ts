import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { BillListComponent } from './components/bills/bill-list/bill-list.component';
import { BillItemComponent } from './components/bills/bill-list/bill-item/bill-item.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BillIconComponent } from './components/bills/bill-list/bill-icon/bill-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillsComponent,
    BillListComponent,
    BillItemComponent,
    BillIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
