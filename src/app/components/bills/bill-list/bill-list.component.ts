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
  public displayBills: Bill[] =[];
  public editBill?: Bill;
  public deleteBill?: Bill;

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
       console.log(res)
      },
      (err: HttpErrorResponse) => {
        alert(`Error occurred : ${err.message}`);
        console.error(`Error occurred : ${err.message}`);
      }
      ) 
      console.info("Displaying All Bills");
      this.editBill = this.bills[0];
      this.deleteBill = this.bills[0];
  }

  /*
  * @desc Function to get bills with payment due
  */
  public async displayAllBills() {
    // this.displayBills = this.bills;
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

  public onAddBill(addForm: NgForm) : void {
    addForm.value.paid = Boolean(addForm.value.paid);
    addForm.value.amount = Number(addForm.value.amount);

    console.log("****")
    console.log("addForm.value.paid")
    console.log(addForm.value.paid)
    console.log(typeof(addForm.value.paid))

    document.getElementById('add-bill-form-close')?.click();
    this.billService.addBill(addForm.value).subscribe(
      (response : Bill) => {
        this.getBills();
        console.log(response);
      } , (err) => {
        alert("Error occured while adding Bill : " + err.message);
      }
    );
    addForm.reset();
  }

  public onUpdateBill(bill: Bill) : void {
    
    this.billService.updateBill(bill).subscribe(
      (response : Bill) => {
        this.getBills();
        console.log(response);
      } , (err) => {
        alert("Error occured while updating Bill : " + err.message);
      }
    );
  }

  public onDeleteBill(billId?: number) : void {
    this.billService.deleteBill(billId || 0).subscribe(
      (response : void) => {
        this.getBills();
      } , (err) => {
        alert("Error occured while deleting Bill : " + err.message);
      }
    );
    
  }

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
function tyepeof(amount: any): any {
  throw new Error('Function not implemented.');
}

