import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  // @Input() valuesFromHomeComponenet: any;
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
     this.registerForm = new FormGroup({
       username: new FormControl(),
       password: new FormControl(),
       confirmPassword: new FormControl()
     });
  }
  register() {
    // console.log(this.model);
    // this.authService.register(this.model).subscribe(
    //   () => this.alertify.success('Register successfully'),
    //   (error) => {
    //     this.alertify.error(error);
    //   }
    // );
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
