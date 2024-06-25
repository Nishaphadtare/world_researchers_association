import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  descriptionArr : any = [];
  processForm : FormGroup;
   editMode: boolean = false;
   editDuty;
  
   constructor() {
     this.createProcessForm();
    }
 
   ngOnInit() {
   }
   createProcessForm(){
     this.processForm = new FormGroup({
       description: new FormControl('', Validators.compose([Validators.required])),
     });
   }
  
 
   AddNew(descriptionArr){
     console.log(this.processForm);
     if(this.processForm.valid){
       if(this.editMode){
         console.log(this.editDuty);
         this.createProcessForm();
         // alert('Do you want to update');  
         
       }else{
         console.log(descriptionArr);
       this.descriptionArr.push(this.processForm.value);
       this.processForm.reset();
       } 
     }
     
   }
 
   OnEdit(des,index){
     this.editMode = true;
     console.log(des);
     this.editDuty = des;
   //  console.log(this.currencyForm);
   // console.log(this.adduser[index].currency);
 
     this.processForm.setValue({
       description : this.descriptionArr[index].description,
       
       
     })
    
 
   }
  OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.processForm);
       this.descriptionArr.splice(i,1);
       
      
     }
 
 
   }
 }
