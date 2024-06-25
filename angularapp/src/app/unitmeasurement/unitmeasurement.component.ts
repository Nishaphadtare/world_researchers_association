import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unitmeasurement',
  templateUrl: './unitmeasurement.component.html',
  styleUrls: ['./unitmeasurement.component.css']
})
export class UnitmeasurementComponent implements OnInit {

  measurements : any [] = [];
  unitMeasurementForm : FormGroup;
  editMode : boolean = false;
  editId;
 
   constructor() { 
     this.createCustForm();
   }
 
   ngOnInit() {
   }
   createCustForm(){
    this.unitMeasurementForm = new FormGroup({
      description : new FormControl('', Validators.compose([Validators.required])),
      reference : new FormControl('', Validators.compose([Validators.required])),
      // checkdeleted : new FormControl('', Validators.compose([Validators.required])),
    
    });
   }
 
   AddNew(departments){
     console.log(this.unitMeasurementForm);
     if(this.unitMeasurementForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createCustForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(departments);
       this.measurements.push(this.unitMeasurementForm.value);
       this.unitMeasurementForm.reset();
       } 
     }
   }
 
   OnEdit(measure, index){
   this.editMode = true;
   console.log(measure);
   this.editId = measure;
 
     this.unitMeasurementForm.setValue({
      description : this.measurements[index].description,
      reference: this.measurements[index].reference,
      
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.unitMeasurementForm);
       this.measurements.splice(i,1);
     
     }
 
 
   }

}
