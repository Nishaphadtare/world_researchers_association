import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-taxinfo',
  templateUrl: './taxinfo.component.html',
  styleUrls: ['./taxinfo.component.css']
})
export class TaxinfoComponent implements OnInit {

  descArr: any = [];
  editMode : boolean = false;
  editId;
  taxInfoForm : FormGroup;
 
   constructor() { 
     this.createTaxForm();
   }
 
   ngOnInit() {
   }
   createTaxForm(){
    this.taxInfoForm = new FormGroup({
     description : new FormControl('', Validators.compose([Validators.required])),
     rate : new FormControl('', Validators.compose([Validators.required])),
     sgst : new FormControl('', Validators.compose([Validators.required])),
     cgst : new FormControl('', Validators.compose([Validators.required])),
     saleledger : new FormControl('', Validators.compose([Validators.required])),
    sgstledger : new FormControl('', Validators.compose([Validators.required])),
    cgstledger : new FormControl('', Validators.compose([Validators.required])),
    igstledger : new FormControl('', Validators.compose([Validators.required])),
    purchaseledger : new FormControl('', Validators.compose([Validators.required])),
    sgstledgers : new FormControl('', Validators.compose([Validators.required])),
    cgstledgers : new FormControl('', Validators.compose([Validators.required])),
    igstledgers : new FormControl('', Validators.compose([Validators.required])),
    });
   }
 
   AddNew(descArr){
     console.log(this.taxInfoForm);
     if(this.taxInfoForm.valid){
       if(this.editMode){
         console.log(this.editId);
         this.createTaxForm();
        
         // alert('Do you want to update');  
         
       }else{
         console.log(descArr);
       this.descArr.push(this.taxInfoForm.value);
       this.taxInfoForm.reset();
       } 
     }
   }
 
   OnEdit(desc, index){
   this.editMode = true;
   console.log(desc);
   this.editId = desc;
 
     this.taxInfoForm.setValue({
      description : this.descArr[index].description,
       rate: this.descArr[index].rate,
       sgst: this.descArr[index].sgst,
       cgst: this.descArr[index].cgst,
       saleledger: this.descArr[index].saleledger,
       sgstledger : this.descArr[index].sgstledger,
       cgstledger: this.descArr[index].cgstledger,
       igstledger: this.descArr[index].igstledger,
       purchaseledger: this.descArr[index].purchaseledger,
       sgstledgers: this.descArr[index].sgstledgers,
       cgstledgers: this.descArr[index].cgstledgers,
       igstledgers: this.descArr[index].igstledgers,
         })
    }
    OnDelete(i){
     if(confirm('Do you want to delete this information?')){
       console.log(this.taxInfoForm);
       this.descArr.splice(i,1);
     
     }
 
 
   }
 

}
