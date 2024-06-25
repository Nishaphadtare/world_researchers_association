import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custbilldetails',
  templateUrl: './custbilldetails.component.html',
  styleUrls: ['./custbilldetails.component.css']
})
export class CustbilldetailsComponent implements OnInit {

  tables : any = [];
  editMode : boolean = false;
  editInfo;
  customerBillingForm : FormGroup;

  constructor() { 
    this.createBillDetails()
  }

  ngOnInit() {
  }
  createBillDetails(){
    this.customerBillingForm = new FormGroup({
      creditperiod : new FormControl('',Validators.compose([Validators.required])),
      lokingperiod : new FormControl('',Validators.compose([Validators.required])),
      creditlimit : new FormControl('',Validators.compose([Validators.required])),
      vendorcode : new FormControl('',Validators.compose([Validators.required])),
      itpano : new FormControl('',Validators.compose([Validators.required])),
    })
  }

  AddNew(tables){
    console.log(this.customerBillingForm);
    if(this.customerBillingForm.valid){
      if(this.editMode){
        console.log(this.editInfo);
        this.createBillDetails();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(tables);
      this.tables.push(this.customerBillingForm.value);
      this.customerBillingForm.reset();
      } 
    }
  }

  OnEdit(table,index){
  this.editMode = true;
  console.log(table);
  this.editInfo = table;

    this.customerBillingForm.setValue({
      creditperiod : this.tables[index].creditperiod,
      lokingperiod: this.tables[index].lokingperiod,
      creditlimit: this.tables[index].creditlimit,
      vendorcode: this.tables[index].vendorcode,
      itpano : this.tables[index].itpano
    
        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.customerBillingForm);
      this.tables.splice(i,1);
  
    }
   }
}
