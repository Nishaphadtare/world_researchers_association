import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorcontactdetails',
  templateUrl: './vendorcontactdetails.component.html',
  styleUrls: ['./vendorcontactdetails.component.css']
})
export class VendorcontactdetailsComponent implements OnInit {

  vendorContactForm : FormGroup;
  tables : any = [];
  editMode : boolean = false;
  editIds; 

  constructor() {
   this.createVendorContact();
   }

  ngOnInit() {
  }
  createVendorContact(){
    this.vendorContactForm = new FormGroup({
      accountid : new FormControl('',Validators.compose([Validators.required])),
      storiesid : new FormControl('',Validators.compose([Validators.required])),
    })
  }

  AddNew(tables){
    console.log(this.vendorContactForm);
    if(this.vendorContactForm.valid){
      if(this.editMode){
        console.log(this.editIds);
        this.createVendorContact();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(tables);
      this.tables.push(this.vendorContactForm.value);
      this.vendorContactForm.reset();
      } 
    }
  }

  OnEdit(table, index){
  this.editMode = true;
  console.log(table);
  this.editIds = table;

    this.vendorContactForm.setValue({
      accountid : this.tables[index].accountid,
      storiesid: this.tables[index].storiesid,
      
        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.vendorContactForm);
      this.tables.splice(i,1);
  
    }
   }
}
