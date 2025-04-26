import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit  {

  username:string="";
  password:string="";
  errorMsg:string="";

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
      
  }

  //loging function/method
  async login()
  {
    if(this.username.trim().length === 0) {
      this.errorMsg = "Username is required.";
      return;
    }
    else if(this.password.trim().length === 0) {
      this.errorMsg = "Password is required.";
      return;
    }

    try{
      const resp = await this.auth.login(this.username, this.password);

      if(resp === 200){
        this.router.navigate(['dashboard']); //navigate to dashboard if login is successful
      }
      else if(resp === 403){
        this.errorMsg = "Invalid Credentials.";
      }
      else {this.errorMsg = "Unexpected error occured.";}
    }
    catch(error){
      console.error("Login error: ", error);
      this.errorMsg = "An error occured while logging in, please try again later";
    }
  }
}
