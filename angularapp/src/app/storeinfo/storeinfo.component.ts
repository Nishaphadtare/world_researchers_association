import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-storeinfo',
  templateUrl: './storeinfo.component.html',
  styleUrls: ['./storeinfo.component.css']
})
export class StoreinfoComponent implements OnInit {
  
  storeInfoForm : FormGroup;
  departments: any = [];
  editMode : boolean = false;
  editId;
 
   constructor() { 
     this.createCustForm();
   }
 
   ngOnInit() {
   }
   createCustForm(){
    this.storeInfoForm = new FormGroup({
     storename : new FormControl('', Validators.compose([Validators.required])),
     department : new FormControl('', Validators.compose([Validators.required])),
     storeincharge : new FormControl('', Validators.compose([Validators.required])),
    
    });
   }
 
   AddNew(departments){
     console.log(this.storeInfoForm);
     if(this.storeInfoForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createCustForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(departments);
       this.departments.push(this.storeInfoForm.value);
       this.storeInfoForm.reset();
       } 
     }
   }
 
   OnEdit(store, index){
   this.editMode = true;
   console.log(store);
   this.editId = store;
 
     this.storeInfoForm.setValue({
      storename : this.departments[index].storename,
      department: this.departments[index].department,
      storeincharge: this.departments[index].storeincharge,
      
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.storeInfoForm);
       this.departments.splice(i,1);
     
     }
 
 
   }

}
