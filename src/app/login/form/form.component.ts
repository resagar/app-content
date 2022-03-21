import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  loginForm: FormGroup = this.formBuilder.group({
    fullName: ['holamundo']
  });

  constructor( private formBuilder: FormBuilder ) { }

  public userLogin(){
    console.log(this.loginForm);
  }
}
