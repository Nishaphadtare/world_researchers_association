import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-machinetypes',
  templateUrl: './machinetypes.component.html',
  styleUrls: ['./machinetypes.component.css']
})
export class MachinetypesComponent implements OnInit {

  descriptionArr : any = [];
  machineTypeForm : FormGroup;
   editMode: boolean = false;
   editDuty;
  
   constructor() {
     this.createMachineForm();
    }
 
   ngOnInit() {
   }
   createMachineForm(){
     this.machineTypeForm = new FormGroup({
       description: new FormControl('', Validators.compose([Validators.required])),
     });
   }
  
 
   AddNew(descriptionArr){
     console.log(this.machineTypeForm);
     if(this.machineTypeForm.valid){
       if(this.editMode){
         console.log(this.editDuty);
         this.createMachineForm();
         // alert('Do you want to update');  
         
       }else{
         console.log(descriptionArr);
       this.descriptionArr.push(this.machineTypeForm.value);
       this.machineTypeForm.reset();
       } 
     }
     
   }
 
   OnEdit(duti,index){
     this.editMode = true;
     console.log(duti);
     this.editDuty = duti;
   //  console.log(this.currencyForm);
   // console.log(this.adduser[index].currency);
 
     this.machineTypeForm.setValue({
       description : this.descriptionArr[index].description,
       
       
     })
    
 
   }
  OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.machineTypeForm);
       this.descriptionArr.splice(i,1);
       
      
     }
 
 
   }
 }