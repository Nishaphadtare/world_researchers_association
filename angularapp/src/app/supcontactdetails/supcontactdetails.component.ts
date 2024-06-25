import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supcontactdetails',
  templateUrl: './supcontactdetails.component.html',
  styleUrls: ['./supcontactdetails.component.css']
})
export class SupcontactdetailsComponent implements OnInit {

  supplierContactForm : FormGroup;
  tables : any = [];
  editMode : boolean = false;
  editIds; 

  constructor() {
   this.createVendorContact();
   }

  ngOnInit() {
  }
  createVendorContact(){
    this.supplierContactForm = new FormGroup({
      accountid : new FormControl('',Validators.compose([Validators.required])),
      storiesid : new FormControl('',Validators.compose([Validators.required])),
    })
  }

  AddNew(tables){
    console.log(this.supplierContactForm);
    if(this.supplierContactForm.valid){
      if(this.editMode){
        console.log(this.editIds);
        this.createVendorContact();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(tables);
      this.tables.push(this.supplierContactForm.value);
      this.supplierContactForm.reset();
      } 
    }
  }

  OnEdit(table, index){
  this.editMode = true;
  console.log(table);
  this.editIds = table;

    this.supplierContactForm.setValue({
      accountid : this.tables[index].accountid,
      storiesid: this.tables[index].storiesid,
      
        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.supplierContactForm);
      this.tables.splice(i,1);
  
    }
   }

}
