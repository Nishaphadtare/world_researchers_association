import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-machineidelcode',
  templateUrl: './machineidelcode.component.html',
  styleUrls: ['./machineidelcode.component.css']
})
export class MachineidelcodeComponent implements OnInit {

  descriptionArr : any = [];
  machineIdleCodeForm : FormGroup;
   editMode: boolean = false;
   editDuty;
  
   constructor() {
     this.createMachineForm();
    }
 
   ngOnInit() {
   }
   createMachineForm(){
     this.machineIdleCodeForm = new FormGroup({
       description: new FormControl('', Validators.compose([Validators.required])),
     });
   }
  
 
   AddNew(descriptionArr){
     console.log(this.machineIdleCodeForm);
     if(this.machineIdleCodeForm.valid){
       if(this.editMode){
         console.log(this.editDuty);
         this.createMachineForm();
         // alert('Do you want to update');  
         
       }else{
         console.log(descriptionArr);
       this.descriptionArr.push(this.machineIdleCodeForm.value);
       this.machineIdleCodeForm.reset();
       } 
     }
     
   }
 
   OnEdit(des,index){
     this.editMode = true;
     console.log(des);
     this.editDuty = des;
   //  console.log(this.currencyForm);
   // console.log(this.adduser[index].currency);
 
     this.machineIdleCodeForm.setValue({
       description : this.descriptionArr[index].description,
       
       
     })
    
 
   }
  OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.machineIdleCodeForm);
       this.descriptionArr.splice(i,1);
       
      
     }
 
 
   }
 }
