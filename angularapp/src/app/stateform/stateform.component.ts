import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stateform',
  templateUrl: './stateform.component.html',
  styleUrls: ['./stateform.component.css']
})
export class StateformComponent implements OnInit {

  names : string = '';
  gstcode:  number;
  editMode: boolean = false;
  editIds; 
  stateForm : FormGroup;
  countries: any[] = [];
 
  constructor() {
    this.createStateForm();
   }

  ngOnInit() {
  }
  createStateForm(){
    this.stateForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      country: new FormControl('', Validators.compose([Validators.required])),
      gstcode: new FormControl('', Validators.compose([Validators.required]))
    });
  }
  AddNew(countries){
    console.log(this.stateForm);
    if(this.stateForm.valid){
      if(this.editMode){
        console.log(this.editIds);
        this.createStateForm();
       
        // alert('Do you want to update');  
        
      }else{
        console.log(countries);
      this.countries.push(this.stateForm.value);
      this.stateForm.reset();
      } 
    }
  }

  OnEdit(con, index){
  this.editMode = true;
  console.log(con);
  this.editIds = con;

    this.stateForm.setValue({
      name : this.countries[index].name,
      country: this.countries[index].country,
      gstcode: this.countries[index].gstcode,

        })
   }
   OnDelete(i){
    if(confirm('Do you want to delete this information?')){
      console.log(this.stateForm);
      this.countries.splice(i,1);
  
    }
   }

}
