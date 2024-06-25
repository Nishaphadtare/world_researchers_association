import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-currencyform',
  templateUrl: './currencyform.component.html',
  styleUrls: ['./currencyform.component.css']
})
export class CurrencyformComponent implements OnInit {

  addUser: any = [];
  editUserId;
  editMode : boolean = false;
  currencyForm : FormGroup;
  constructor() { //private _fb: FormBuilder, private _dataService: DataService
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.currencyForm = new FormGroup({
      currency: new FormControl('', Validators.compose([Validators.required])),
      change: new FormControl('', Validators.compose([Validators.required])),
      shortname: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
      purchaseprice: new FormControl('',Validators.compose([Validators.required])),
      saleprice: new FormControl('',Validators.compose([Validators.required]))
    });
  }
 

  AddNew(addUser){
    console.log(this.currencyForm);
    if(this.currencyForm.valid){
      if(this.editMode){
        console.log(this.editUserId);
        this.createForm();
        // alert('Do you want to update');  
        
      }else{
        console.log(addUser);
      this.addUser.push(this.currencyForm.value);
      this.currencyForm.reset();
      } 
    }
 
    // if(this.currencyForm.valid){
    //   this._dataService.addNew(this.currencyForm.value).subscribe({
    //     next: (val: any)=>{
    //       alert('data added successfully')
    //     },
    //     error: (err: any) => {
    //       console.error(err);
    //     }
    //    })
    // }
    
  }
  // closed(){
  //  console.log(this.currencyForm);
  // }
  // save(){
  //   console.log(this.currencyForm);
    
  // onCancel(){
  //   this.currencyForm.reset();
  // }
  OnEdit(user,index){
    this.editMode = true;
    console.log(user);
    this.editUserId = user;
  //  console.log(this.currencyForm);
  // console.log(this.adduser[index].currency);

    this.currencyForm.setValue({
      currency : this.addUser[index].currency,
      change: this.addUser[index].change,
      shortname: this.addUser[index].shortname,
      purchaseprice: this.addUser[index].purchaseprice,
      saleprice: this.addUser[index].saleprice,
    })
   

  }
 OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.currencyForm);
      this.addUser.splice(i,1);
      
      // console.log(user);
      // (<FormArray>this.currencyForm.get('user')).removeAt(user , i[1])
    }


  }
}


