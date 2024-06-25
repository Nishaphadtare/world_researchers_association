import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custcontacdetails',
  templateUrl: './custcontacdetails.component.html',
  styleUrls: ['./custcontacdetails.component.css']
})
export class CustcontacdetailsComponent implements OnInit {

  tables : any = [];
  editMode : boolean = false;
  editIds; 
  customerContactForm : FormGroup;

  constructor() {
   this.createCustContact();
   }

  ngOnInit() {
  }
  createCustContact(){
    this.customerContactForm = new FormGroup({
      accountId : new FormControl('',Validators.compose([Validators.required])),
      storiesid : new FormControl('',Validators.compose([Validators.required])),
    })
  }

  AddNew(tables){
    console.log(this.customerContactForm);
    if(this.customerContactForm.valid){
      if(this.editMode){
        console.log(this.editIds);
        this.createCustContact();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(tables);
      this.tables.push(this.customerContactForm.value);
      this.customerContactForm.reset();
      } 
    }
  }

  OnEdit(table, index){
  this.editMode = true;
  console.log(table);
  this.editIds = table;

    this.customerContactForm.setValue({
      accountId : this.tables[index].accountId,
      storiesid: this.tables[index].storiesid,
      
        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.customerContactForm);
      this.tables.splice(i,1);
  
    }
   }

}
