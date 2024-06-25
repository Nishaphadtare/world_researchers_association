import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brandname',
  templateUrl: './brandname.component.html',
  styleUrls: ['./brandname.component.css']
})
export class BrandnameComponent implements OnInit {

  brandNames : any [] = [];
  brandNameForm : FormGroup;
  editMode : boolean = false;
  editId;
 
   constructor() { 
     this.createBrandForm();
   }
 
   ngOnInit() {
   }
   createBrandForm(){
    this.brandNameForm = new FormGroup({
      refcode : new FormControl('', Validators.compose([Validators.required])),
      brandname : new FormControl('', Validators.compose([Validators.required])),
      // checkdeleted : new FormControl('', Validators.compose([Validators.required])),
    
    });
   }
 
   AddNew(brandNames){
     console.log(this.brandNameForm);
     if(this.brandNameForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createBrandForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(brandNames);
       this.brandNames.push(this.brandNameForm.value);
       this.brandNameForm.reset();
       } 
     }
   }
 
   OnEdit(brand, index){
    this.editMode = true;
    console.log(brand);
    this.editId = brand;
  
      this.brandNameForm.setValue({
        refcode : this.brandNames[index].refcode,
       brandname: this.brandNames[index].brandname,
       
          })
     }
     OnDelete(i){
      if(confirm('Do you want to delete this information?')){
        console.log(this.brandNameForm);
        this.brandNames.splice(i,1);
      
      }
  
  
    }
 
  }
  