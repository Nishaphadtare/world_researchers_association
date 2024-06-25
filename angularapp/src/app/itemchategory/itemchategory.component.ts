import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-itemchategory',
  templateUrl: './itemchategory.component.html',
  styleUrls: ['./itemchategory.component.css']
})
export class ItemchategoryComponent implements OnInit {

  taxArr: any[] = [];
  itemChategoryForm: FormGroup;
  editMode: boolean = false;
  editTax;
  constructor() { 
    this.createChategoryForm();
  }

  ngOnInit() {
  }
  createChategoryForm(){
   this.itemChategoryForm = new FormGroup({
     description : new FormControl('', Validators.compose([Validators.required])),
     hsncode : new FormControl('', Validators.compose([Validators.required])),
     taxapplicable : new FormControl('', Validators.compose([Validators.required])),
     sgst : new FormControl('', Validators.compose([Validators.required])),
     cgst : new FormControl('', Validators.compose([Validators.required])),
     igst : new FormControl('', Validators.compose([Validators.required])),
   });
  }

  AddNew(taxArr){
    console.log(this.itemChategoryForm);
    if(this.itemChategoryForm.valid){
      if(this.editMode){
        console.log(this.editTax);
        this.createChategoryForm();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(taxArr);
      this.taxArr.push(this.itemChategoryForm.value);
      this.itemChategoryForm.reset();
      } 
    }
  }

  
  OnEdit(tax, index){
  this.editMode = true;
  console.log(tax);
  this.editTax = tax;

    this.itemChategoryForm.setValue({
     description : this.taxArr[index].description,
     hsncode: this.taxArr[index].hsncode,
     taxapplicable: this.taxArr[index].taxapplicable,
     sgst : this.taxArr[index].sgst,
     cgst: this.taxArr[index].cgst,
     igst : this.taxArr[index].igst,
     
        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.itemChategoryForm);
      this.taxArr.splice(i,1);
    
    }


  }


}
