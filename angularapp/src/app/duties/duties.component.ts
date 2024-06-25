import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.css']
})
export class DutiesComponent implements OnInit {

 dutyArr : any = [];
 dutiesForm : FormGroup;
  editMode: boolean = false;
  editDuty;
 
  constructor() {
    this.createDutyForm();
   }

  ngOnInit() {
  }
  createDutyForm(){
    this.dutiesForm = new FormGroup({
      description: new FormControl('', Validators.compose([Validators.required])),
      duty: new FormControl('', Validators.compose([Validators.required]))
    });
  }
 

  AddNew(dutyArr){
    console.log(this.dutiesForm);
    if(this.dutiesForm.valid){
      if(this.editMode){
        console.log(this.editDuty);
        this.createDutyForm();
        // alert('Do you want to update');  
        
      }else{
        console.log(dutyArr);
      this.dutyArr.push(this.dutiesForm.value);
      this.dutiesForm.reset();
      } 
    }
    
  }

  OnEdit(duti,index){
    this.editMode = true;
    console.log(duti);
    this.editDuty = duti;
  //  console.log(this.currencyForm);
  // console.log(this.adduser[index].currency);

    this.dutiesForm.setValue({
      description : this.dutyArr[index].description,
      duty: this.dutyArr[index].duty,
      
    })
   

  }
 OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.dutiesForm);
      this.dutyArr.splice(i,1);
      
     
    }


  }
}