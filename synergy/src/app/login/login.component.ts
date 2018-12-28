import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje:string;
  loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.logOut();
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  logIn(){

    if (this.loginForm.invalid) {
        return;
    }
    this.loginService.login(this.f.username.value, this.f.password.value)
        .subscribe(
            data => {
              if (data == 1){
                this.mensaje = "Usuario y contraseña no valida.";
                this.router.navigate(['login']);
              }else{
                this.router.navigate(['home']);
              }
            },
            error => {
              this.router.navigate(['login']);
            });
    }

  logOut(){
    this.loginService.logout();
  }

  navigate(){

  }

}
