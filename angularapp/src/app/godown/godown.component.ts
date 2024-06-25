import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-godown',
  templateUrl: './godown.component.html',
  styleUrls: ['./godown.component.css']
})
export class GodownComponent implements OnInit {

  countries: any = [];
  editMode : boolean = false;
  editId;
  godownForm : FormGroup;
 
   constructor() { 
     this.createGoForm();
   }
 
   ngOnInit() {
   }
   createGoForm(){
    this.godownForm = new FormGroup({
     name : new FormControl('', Validators.compose([Validators.required])),
     address : new FormControl('', Validators.compose([Validators.required])),
     pincode : new FormControl('', Validators.compose([Validators.required])),
     country : new FormControl('', Validators.compose([Validators.required])),
     gstno : new FormControl('', Validators.compose([Validators.required])),
     state : new FormControl('', Validators.compose([Validators.required])),
     phone : new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])),
     mobile : new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])),
     email : new FormControl('', Validators.compose([Validators.required])),
     pancode: new FormControl('', Validators.compose([Validators.required])),
    });
   }
 
   AddNew(countries){
     console.log(this.godownForm);
     if(this.godownForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createGoForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(countries);
       this.countries.push(this.godownForm.value);
       this.godownForm.reset();
       } 
     }
   }
 
   OnEdit(coun, index){
   this.editMode = true;
   console.log(coun);
   this.editId = coun;
 
     this.godownForm.setValue({
       name : this.countries[index].defined,
       address: this.countries[index].barcode,
       category: this.countries[index].category,
       pincode: this.countries[index].country,
       country: this.countries[index].edpno,
       gstno : this.countries[index].gstno,
       state: this.countries[index].state,
       phone: this.countries[index].phone,
       mobile: this.countries[index].mobile,
       email: this.countries[index].email,
       pancode: this.countries[index].pancode,
     
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.godownForm);
       this.countries.splice(i,1);
     
     }
 
 
   }
 
 }
