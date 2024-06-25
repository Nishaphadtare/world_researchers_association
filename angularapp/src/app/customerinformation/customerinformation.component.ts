import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerinformation',
  templateUrl: './customerinformation.component.html',
  styleUrls: ['./customerinformation.component.css']
})
export class CustomerinformationComponent implements OnInit {

 countries: any = [];
 editMode : boolean = false;
 editId;
 customerInfoForm : FormGroup;

  constructor() { 
    this.createCustForm();
  }

  ngOnInit() {
  }
  createCustForm(){
   this.customerInfoForm = new FormGroup({
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

  AddNew(countries){
    console.log(this.customerInfoForm);
    if(this.customerInfoForm.valid){
      if(this.editMode){
        console.log(this.editId);
        this.createCustForm();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(countries);
      this.countries.push(this.customerInfoForm.value);
      this.customerInfoForm.reset();
      } 
    }
  }

  OnEdit(cou, index){
  this.editMode = true;
  console.log(cou);
  this.editId = cou;

    this.customerInfoForm.setValue({
      refcode : this.countries[index].refcode,
      shortname: this.countries[index].shortname,
      lastrefno: this.countries[index].lastrefno,
      partyname: this.countries[index].partyname,
      tallyledger: this.countries[index].tallyledger,
      pincode : this.countries[index].pincode,
      address: this.countries[index].address,
      country: this.countries[index].country,
      state: this.countries[index].state,
      ownername: this.countries[index].ownername,
      phone: this.countries[index].phone,
      mobile: this.countries[index].mobile,
        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.customerInfoForm);
      this.countries.splice(i,1);
    
    }


  }
 
}
