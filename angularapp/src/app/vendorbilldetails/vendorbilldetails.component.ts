import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorbilldetails',
  templateUrl: './vendorbilldetails.component.html',
  styleUrls: ['./vendorbilldetails.component.css']
})
export class VendorbilldetailsComponent implements OnInit {

  vendorBillDetailsForm : FormGroup;
  tables : any = [];
  editMode : boolean = false;
  editInfo;

  constructor() { 
    this.createBillDetails()
  }

  ngOnInit() {
  }
  createBillDetails(){
    this.vendorBillDetailsForm = new FormGroup({
      creditperiod : new FormControl('',Validators.compose([Validators.required])),
      lokingperiod : new FormControl('',Validators.compose([Validators.required])),
      creditlimit : new FormControl('',Validators.compose([Validators.required])),
      vendorcode : new FormControl('',Validators.compose([Validators.required])),
      itpano : new FormControl('',Validators.compose([Validators.required])),
    })
  }

  AddNew(tables){
    console.log(this.vendorBillDetailsForm);
    if(this.vendorBillDetailsForm.valid){
      if(this.editMode){
        console.log(this.editInfo);
        this.createBillDetails();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(tables);
      this.tables.push(this.vendorBillDetailsForm.value);
      this.vendorBillDetailsForm.reset();
      } 
    }
  }

  OnEdit(table, index){
  this.editMode = true;
  console.log(table);
  this.editInfo = table;

    this.vendorBillDetailsForm.setValue({
      creditperiod : this.tables[index].creditperiod,
      lokingperiod: this.tables[index].lokingperiod,
      creditlimit: this.tables[index].creditlimit,
      vendorcode: this.tables[index].vendorcode,
      itpano : this.tables[index].itpano
    
        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.vendorBillDetailsForm);
      this.tables.splice(i,1);
  
    }
   }
}

