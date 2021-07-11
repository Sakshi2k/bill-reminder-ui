import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/service/bill.service';
import { Bill } from '../bill.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  public bills: Bill[] =[];
  public displayBills: any =[];

  public editBill?: Bill;
  public deleteBill?: Bill;

  public searchName: String="";

  constructor(private billService : BillService) {}

  ngOnInit(){
    this.getBills();
  }
  
  /*
  * @desc Function to get all bills
  */
 public getBills() {
   this.billService.getBills().subscribe(
     (res: Bill[]) => {
       this.bills = res;
       this.displayBills = res;
       this.editBill = this.bills[0];
       this.deleteBill = this.bills[0];
      },
      (err: HttpErrorResponse) => {
        console.error(`Error occurred : ${err.message}`);
      }
      ) 
      console.info("Displaying All Bills");

  }

  /*
  * @desc Function to get bills with payment due
  */
  public async displayAllBills() {
    this.displayBills = this.bills.filter( bill => {
      return bill;
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

  /*
  * @desc Function to add new bill
  */
  public onAddBill(addForm: NgForm) : void {
    addForm.value.paid = Boolean(addForm.value.paid);
    addForm.value.amount = Number(addForm.value.amount);

    document.getElementById('add-bill-form-close')?.click();
    this.billService.addBill(addForm.value).subscribe(
      (response : Bill) => {
        this.getBills();
        // console.log(response);
      } , (err) => {
        console.error("Error occured while adding Bill : " + err.message);
      }
    );
    addForm.reset();
  }

  /*
  * @desc Function to update exisiting bill
  */
  public onUpdateBill(bill: Bill) : void {
    
    this.billService.updateBill(bill).subscribe(
      (response : Bill) => {
        this.getBills();
        // console.log(response);
      } , (err) => {
        console.error("Error occured while updating Bill : " + err.message);
      }
    );
  }

  /*
  * @desc Function to delete bill
  */
  public onDeleteBill(billId?: number) : void {
    this.billService.deleteBill(billId || 0).subscribe(
      (response : void) => {
        this.getBills();
      } , (err) => {
        alert("Error occured while deleting Bill : " + err.message);
      }
    );
    
  }

  /*
  * @desc Function to search bills by bill name,
  * using elastic search in backend for this call.
  */
  public searchBills() : void {
    console.log("Searching Bill name : " + this.searchName);
    this.billService.searchBillByName(this.searchName).subscribe(
     (res :any) => {
      this.displayBills = [];
      res.map((element: any, index: string | number) => {
        this.displayBills.push(element.sourceAsMap)
      });
     },
     (err: HttpErrorResponse) => {
       console.error(`Error occurred while searching by name: : ${err.message}`);
     }) ;
     this.searchName = "";
  }

  /*
  * @desc Function to open models for edit, update and delete
  */
  public openModal(bill?:Bill, action?: string) : void {
    const modalsDiv = document.getElementById("modalsDiv");
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute("data-toggle", 'modal');

    console.info("action : " + action);
    
    if(action === 'add')
      button.setAttribute("data-target", '#addBillModal');
    else if(action === 'edit') {
      this.editBill = bill;
      button.setAttribute("data-target", '#editBillModal');
    }
    else if(action === 'delete') {
      this.deleteBill = bill;
      button.setAttribute("data-target", '#deleteBillModal');
    }

    modalsDiv?.appendChild(button);
    button.click();
  }
}