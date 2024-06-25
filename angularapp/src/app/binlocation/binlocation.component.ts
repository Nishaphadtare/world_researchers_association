import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-binlocation',
  templateUrl: './binlocation.component.html',
  styleUrls: ['./binlocation.component.css']
})
export class BinlocationComponent implements OnInit {

  storeNames : any [] = [];
  binLocationForm : FormGroup;
  editMode : boolean = false;
  editId;
 
   constructor() { 
     this.createbinForm();
   }
 
   ngOnInit() {
   }
   createbinForm(){
    this.binLocationForm = new FormGroup({
      storename : new FormControl('', Validators.compose([Validators.required])),
      locationid : new FormControl('', Validators.compose([Validators.required])),
      // checkdeleted : new FormControl('', Validators.compose([Validators.required])),
    
    });
   }
 
   AddNew(storeNames){
     console.log(this.binLocationForm);
     if(this.binLocationForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createbinForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(storeNames);
       this.storeNames.push(this.binLocationForm.value);
       this.binLocationForm.reset();
       } 
     }
   }
 
   
   OnEdit(measure, index){
   this.editMode = true;
   console.log(measure);
   this.editId = measure;
 
     this.binLocationForm.setValue({
      storename : this.storeNames[index].storename,
      locationid: this.storeNames[index].locationid,
      
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.binLocationForm);
       this.storeNames.splice(i,1);
     
     }
 
 
   }


}
