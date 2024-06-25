import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productionstatuscode',
  templateUrl: './productionstatuscode.component.html',
  styleUrls: ['./productionstatuscode.component.css']
})
export class ProductionstatuscodeComponent implements OnInit {

 
  descriptionArr : any = [];
  productionForm : FormGroup;
   editMode: boolean = false;
   editDuty;
  
   constructor() {
     this.createProForm();
    }
 
   ngOnInit() {
   }
   createProForm(){
     this.productionForm = new FormGroup({
       description: new FormControl('', Validators.compose([Validators.required])),
       descriptioninvoice: new FormControl('', Validators.compose([Validators.required])),
      //  raugh: new FormControl('', Validators.compose([Validators.required])),
      //  semifinish: new FormControl('', Validators.compose([Validators.required])),
      //  finish: new FormControl('', Validators.compose([Validators.required])),

     });
   }
  
 
   AddNew(descriptionArr){
     console.log(this.productionForm);
     if(this.productionForm.valid){
       if(this.editMode){
         console.log(this.editDuty);
         this.createProForm();
         // alert('Do you want to update');  
         
       }else{
         console.log(descriptionArr);
       this.descriptionArr.push(this.productionForm.value);
       this.productionForm.reset();
       } 
     }
     
   }
 
   OnEdit(des,index){
     this.editMode = true;
     console.log(des);
     this.editDuty = des;
   //  console.log(this.currencyForm);
   // console.log(this.adduser[index].currency);
 
     this.productionForm.setValue({
       description : this.descriptionArr[index].description,
       descriptioninvoice : this.descriptionArr[index].descriptioninvoice,
       
     })
    
 
   }
  OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.productionForm);
       this.descriptionArr.splice(i,1);
       
      
     }
 
 
   }
 }