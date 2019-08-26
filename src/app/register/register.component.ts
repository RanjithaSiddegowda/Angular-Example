import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      department: [''],
      designation: [''],
      salary: ['']
  })
  }

  onSubmit() {
   // this.submitted = true;

    // stop here if form is invalid
    //if (this.registerForm.invalid) {
        //return;
   // }

    console.log('success ' + JSON.stringify(this.registerForm.value));
  }

}
