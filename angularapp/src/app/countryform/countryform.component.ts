import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-countryform',
  templateUrl: './countryform.component.html',
  styleUrls: ['./countryform.component.css']
})
export class CountryformComponent implements OnInit {

  // submitted: boolean = false;
  currencyArr : any = [];
  countryForm : FormGroup;
  editMode: boolean = false;
  editUserId;
 
  constructor() {
    this.createCountryForm();
   }

  ngOnInit() {
  }
  createCountryForm(){
    this.countryForm = new FormGroup({
      country: new FormControl('', Validators.compose([Validators.required])),
      currencies: new FormControl('', Validators.compose([Validators.required]))
    });
  }
 

  AddNew(currencyArr){
    console.log(this.countryForm);
    if(this.countryForm.valid){
      if(this.editMode){
        console.log(this.editUserId);
        this.createCountryForm();
        // alert('Do you want to update');  
        
      }else{
        console.log(currencyArr);
      this.currencyArr.push(this.countryForm.value);
      this.countryForm.reset();
      }  
    
    }
    
  }

  OnEdit(curr,index){
    this.editMode = true;
    console.log(curr);
    this.editUserId = curr;
  //  console.log(this.currencyForm);
  // console.log(this.adduser[index].currency);

    this.countryForm.setValue({
      country : this.currencyArr[index].country,
      currencies: this.currencyArr[index].currencies,
      
    })
   

  }
 OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.countryForm);
      this.currencyArr.splice(i,1);
      
     
    }


  }
}