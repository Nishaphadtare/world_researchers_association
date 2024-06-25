import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-machinemaintanance',
  templateUrl: './machinemaintanance.component.html',
  styleUrls: ['./machinemaintanance.component.css']
})
export class MachinemaintananceComponent implements OnInit {

  typeArr: any = [];
  editMode : boolean = false;
  editId;
  machineInfoForm : FormGroup;
 
   constructor() { 
     this.createMachineForm();
   }
 
   ngOnInit() {
   }
   createMachineForm(){
    this.machineInfoForm = new FormGroup({
     type : new FormControl('', Validators.compose([Validators.required])),
     description : new FormControl('', Validators.compose([Validators.required])),
     machindno : new FormControl('', Validators.compose([Validators.required])),
     installedon : new FormControl('', Validators.compose([Validators.required])),
     department : new FormControl('', Validators.compose([Validators.required])),
     length : new FormControl('', Validators.compose([Validators.required])),
    width : new FormControl('', Validators.compose([Validators.required])),
    height : new FormControl('', Validators.compose([Validators.required])),
    dai : new FormControl('', Validators.compose([Validators.required])),
    xaxis : new FormControl('', Validators.compose([Validators.required])),
    yaxis : new FormControl('', Validators.compose([Validators.required])),
    zaxis : new FormControl('', Validators.compose([Validators.required])),
    a4thxis : new FormControl('', Validators.compose([Validators.required])),
    make : new FormControl('', Validators.compose([Validators.required])),
    control : new FormControl('', Validators.compose([Validators.required])),
    maxload : new FormControl('', Validators.compose([Validators.required])),
    hr : new FormControl('', Validators.compose([Validators.required])),
    });
   }
 
   AddNew(typeArr){
     console.log(this.machineInfoForm);
     if(this.machineInfoForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createMachineForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(typeArr);
       this.typeArr.push(this.machineInfoForm.value);
       this.machineInfoForm.reset();
       } 
     }
   }
 
   OnEdit(type, index){
   this.editMode = true;
   console.log(type);
   this.editId = type;
 
     this.machineInfoForm.setValue({
      type: this.typeArr[index].type,
      description : this.typeArr[index].description,
      machindno: this.typeArr[index].machindno,
      installedon: this.typeArr[index].installedon,
      department: this.typeArr[index].department,
      length : this.typeArr[index].length,
       width: this.typeArr[index].width,
       height: this.typeArr[index].height,
       dai: this.typeArr[index].dai,
       xaxis: this.typeArr[index].xaxis,
       yaxis: this.typeArr[index].yaxis,
       zaxis: this.typeArr[index].zaxis,
       a4thxis: this.typeArr[index].a4thxis,
       make: this.typeArr[index].make,
       control: this.typeArr[index].control,
       maxload: this.typeArr[index].maxload,
       hr: this.typeArr[index].hr,
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.machineInfoForm);
       this.typeArr.splice(i,1);
     
     }
 
 
   }
 

}
