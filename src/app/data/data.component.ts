import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  myForm: FormGroup;
  private allAddress:Array<object> = [];
  private allSubUsers:Array<object> = [];
  private Shopdata:object = {};
  private obj:object = {};
  private check: boolean;
  private check_sub: boolean;

  constructor(private fb: FormBuilder) {

    this.myForm = fb.group({
      name: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      plotno: new FormControl('', Validators.required),
      locality: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      subName: new FormControl('', Validators.required),
      subEmail: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }


  onSubmit(form: FormGroup) {
    
    let val = form.value;
    if (val.name && val.mail) {
     this.Shopdata = { 'Name': val.name, 'mail': val.mail , 'address' : this.allAddress , 'subUsers' :  this.allSubUsers};
    }
  }

  adAddress() {
    let val = this.myForm.value;
    if (val.locality && val.pincode && val.plotno) {
      this.obj = { 'Locality': val.locality, 'Pincode': val.pincode, 'plotno': val.plotno };
      this.allAddress.push(this.obj);
      this.obj = {};
      this.myForm.patchValue({ locality: '' });
      this.myForm.patchValue({ pincode: '' });
      this.myForm.patchValue({ plotno: '' });
      this.myForm.controls.plotno.setErrors(null);
      this.myForm.controls.locality.setErrors(null);
      this.myForm.controls.pincode.setErrors(null);
      this.check = false;
    }

  }

  show(eve) {
    if (eve.checked) {
      this.myForm.controls.plotno.markAsUntouched();
      this.myForm.controls.locality.markAsUntouched();
      this.myForm.controls.pincode.markAsUntouched();
    }
  }


  show_Sub(eve) {
    if (eve.checked) {
      this.myForm.controls.subName.markAsUntouched();
      this.myForm.controls.subEmail.markAsUntouched();
    }
  }

  adSubUsers() {
    let val = this.myForm.value;
    if (val.subName && val.subEmail) {
      this.obj = { 'name': val.subName, 'email': val.subEmail };
      this.allSubUsers.push(this.obj);
      this.obj = {};
      this.myForm.patchValue({ subName: '' });
      this.myForm.patchValue({ subEmail: '' });
      this.myForm.controls.subName.setErrors(null);
      this.myForm.controls.subEmail.setErrors(null);
    }
    this.check_sub = false;
  }

  
}

