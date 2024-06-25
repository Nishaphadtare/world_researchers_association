import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  gstArr: any = [];
  editMode : boolean = false;
  editId;
  transporterForm : FormGroup;
 
   constructor() { 
     this.createTranceForm();
   }
 
   ngOnInit() {
   }
   createTranceForm(){
    this.transporterForm = new FormGroup({
     name : new FormControl('', Validators.compose([Validators.required])),
     address : new FormControl('', Validators.compose([Validators.required])),
     contact : new FormControl('', Validators.compose([Validators.required])),
     phone : new FormControl('', Validators.compose([Validators.required])),
     mobile : new FormControl('', Validators.compose([Validators.required])),
     gstno : new FormControl('', Validators.compose([Validators.required])),
     mail : new FormControl('', Validators.compose([Validators.required])),
    
    });
   }
 
   AddNew(gstArr){
     console.log(this.transporterForm);
     if(this.transporterForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createTranceForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(gstArr);
       this.gstArr.push(this.transporterForm.value);
       this.transporterForm.reset();
       } 
     }
   }
 
   OnEdit(g, index){
   this.editMode = true;
   console.log(g);
   this.editId = g;
 
     this.transporterForm.setValue({
      name : this.gstArr[index].name,
      address: this.gstArr[index].address,
      contact: this.gstArr[index].contact,
      phone: this.gstArr[index].phone,
      mobile: this.gstArr[index].mobile,
      gstno : this.gstArr[index].gstno,
      mail: this.gstArr[index].mail,
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.transporterForm);
       this.gstArr.splice(i,1);
     
     }
 
 
   }
 
 }

