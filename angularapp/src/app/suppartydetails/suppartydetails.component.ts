import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suppartydetails',
  templateUrl: './suppartydetails.component.html',
  styleUrls: ['./suppartydetails.component.css']
})
export class SuppartydetailsComponent implements OnInit {

  country: any = [];
  editUserId;
  editMode : boolean = false;
  supplierPartyForm : FormGroup;
    constructor() { 
    this.createsupplierForm();
  }

  ngOnInit() {
  }
  createsupplierForm(){
    this.supplierPartyForm = new FormGroup({
     refcode : new FormControl('', Validators.compose([Validators.required])),
     shortname : new FormControl('', Validators.compose([Validators.required])),
     lastrefno : new FormControl('', Validators.compose([Validators.required])),
     partyname : new FormControl('', Validators.compose([Validators.required])),
     tallyledger : new FormControl('', Validators.compose([Validators.required])),
     pincode : new FormControl('', Validators.compose([Validators.required])),
     address : new FormControl('', Validators.compose([Validators.required])),
     country : new FormControl('', Validators.compose([Validators.required])),
     state : new FormControl('', Validators.compose([Validators.required])),
     ownername: new FormControl('', Validators.compose([Validators.required])),
     phone : new FormControl('', Validators.compose([Validators.required,  Validators.minLength(10), Validators.maxLength(12)])),
     mobile : new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])),
    });
   }
 
   AddNew(country){
     console.log(this.supplierPartyForm);
     if(this.supplierPartyForm.valid){
       if(this.editMode){
         console.log(this.editUserId);
         this.createsupplierForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(country);
       this.country.push(this.supplierPartyForm.value);
       this.supplierPartyForm.reset();
       } 
     }
   }
 
   OnEdit(cou, index){
   this.editMode = true;
   console.log(cou);
   this.editUserId = cou;
 
     this.supplierPartyForm.setValue({
       refcode : this.country[index].refcode,
       shortname: this.country[index].shortname,
       lastrefno: this.country[index].lastrefno,
       partyname: this.country[index].partyname,
       tallyledger: this.country[index].tallyledger,
       pincode : this.country[index].pincode,
       address: this.country[index].address,
       country: this.country[index].country,
       state: this.country[index].state,
       ownername: this.country[index].ownername,
       phone: this.country[index].phone,
       mobile: this.country[index].mobile,
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.supplierPartyForm);
       this.country.splice(i,1);
     
     }
 
 
   }
  
 }
 