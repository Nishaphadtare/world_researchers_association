import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobwork',
  templateUrl: './jobwork.component.html',
  styleUrls: ['./jobwork.component.css']
})
export class JobworkComponent implements OnInit {

   
  costCenter: any = [];
  editMode : boolean = false;
  editId;
  jobworkForm : FormGroup;
 
   constructor() { 
     this.createProdForm();
   }
 
   ngOnInit() {
   }
   createProdForm(){
    this.jobworkForm = new FormGroup({
      customername : new FormControl('', Validators.compose([Validators.required])),
     barcode : new FormControl('', Validators.compose([Validators.required])),
     category : new FormControl('', Validators.compose([Validators.required])),
     hsncode : new FormControl('', Validators.compose([Validators.required])),
     edpno : new FormControl('', Validators.compose([Validators.required])),
     partycodeno : new FormControl('', Validators.compose([Validators.required])),
     description : new FormControl('', Validators.compose([Validators.required])),
     tallyitem : new FormControl('', Validators.compose([Validators.required])),
     costcenter : new FormControl('', Validators.compose([Validators.required])),
     blocation: new FormControl('', Validators.compose([Validators.required])),
     totalstock : new FormControl('', Validators.compose([Validators.required])),
     outstock :  new FormControl('', Validators.compose([Validators.required])),
     measurement : new FormControl('', Validators.compose([Validators.required])),
     saleprice : new FormControl('', Validators.compose([Validators.required])),
     reorder: new FormControl('', Validators.compose([Validators.required])),
    });
   }
 
   AddNew(costCenter){
     console.log(this.jobworkForm);
     if(this.jobworkForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createProdForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(costCenter);
       this.costCenter.push(this.jobworkForm.value);
       this.jobworkForm.reset();
       } 
     }
   }
 
   OnEdit(cost, index){
   this.editMode = true;
   console.log(cost);
   this.editId = cost;
 
     this.jobworkForm.setValue({
       customername : this.costCenter[index].customername,
       barcode: this.costCenter[index].barcode,
       category: this.costCenter[index].category,
       hsncode: this.costCenter[index].hsncode,
       edpno: this.costCenter[index].edpno,
       partycodeno : this.costCenter[index].partycodeno,
       description: this.costCenter[index].description,
       tallyitem: this.costCenter[index].tallyitem,
       costcenter: this.costCenter[index].costcenter,
       blocation: this.costCenter[index].blocation,
       totalstock: this.costCenter[index].totalstock,
       outstock: this.costCenter[index].outstock,
       measurement: this.costCenter[index].measurement,
       saleprice: this.costCenter[index].saleprice,
       reorder: this.costCenter[index].reorder,
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.jobworkForm);
       this.costCenter.splice(i,1);
     
     }
 
 
   }
 
 }
 
 
 
 
 
 
 
 
 