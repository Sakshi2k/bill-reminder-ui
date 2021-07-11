import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bill } from '../components/bills/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private apiServerUrl = environment.apiBaseServerURL;

  constructor(private http: HttpClient) { }

  public getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.apiServerUrl}/bill/all`);;
  }
  
  public getBillById(billId : number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiServerUrl}/bill/find/${billId}`);
  }
  
  public addBill(bill : Bill): Observable<Bill> {
    console.log("--------***------")
    console.log("adding a new bill");
    console.log("Bill : " + bill);
    return this.http.post<Bill>(`${this.apiServerUrl}/bill/add`, bill);
  }
  
  public updateBill(bill : Bill): Observable<Bill> {
    console.log("adding a new bill");
    console.log("Bill : " + bill);
    return this.http.put<Bill>(`${this.apiServerUrl}/bill/update`, bill);
  }

  public deleteBill(billId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/bill/delete/${billId}`);
  }

  public searchBillByName(name : String) : Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.apiServerUrl}/bill/search/${name}`);
  }
}
