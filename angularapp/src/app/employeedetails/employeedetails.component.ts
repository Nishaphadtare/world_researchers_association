import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {



  ngOnInit() {
  }

  employeeArr: any = [];
  editMode : boolean = false;
  EmployeeForm : FormGroup;
  constructor() { //private _fb: FormBuilder, private _dataService: DataService
    this.createForm();
  }

  createForm(){
    this.EmployeeForm = new FormGroup({
      employeeno: new FormControl('', Validators.compose([Validators.required])),
      design: new FormControl('', Validators.compose([Validators.required])),
      shortname: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
      purchaseprice: new FormControl('',Validators.compose([Validators.required])),
      saleprice: new FormControl('',Validators.compose([Validators.required]))
    });
  }
 

  AddNew(){
    console.log(this.EmployeeForm);
    if(this.EmployeeForm.valid){
      if(this.editMode){
        //...
      }else{
        this.employeeArr.push(this.EmployeeForm.value);
        this.EmployeeForm.reset();
      }
    }
 
  }

  OnEdit(userId,index){
    this.editMode = true;
  //  console.log(this.currencyForm);
  // console.log(this.adduser[index].currency);

    this.EmployeeForm.setValue({
      employeeno : this.employeeArr[index].employeeno,
      design: this.employeeArr[index].design,
      name: this.employeeArr[index].name,
      address: this.employeeArr[index].address,
      phone: this.employeeArr[index].phone,
      mobile: this.employeeArr[index].mobile,
      email: this.employeeArr[index].email,
    })
   

  }
 OnDelete(index: number): void{
    if(confirm('Do you want to delete this information?')){
      console.log(this.EmployeeForm);
      // console.log(userId);
      // (<FormArray>this.currencyForm.get('user')).removeAt(index)
    }

  }
}
