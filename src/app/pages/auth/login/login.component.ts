import { Router } from '@angular/router';
import { UserService } from './../../../services/storage/user.service';
import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  erreur : string = '';
  user : IUser = {
    email : '',
    password : ''
  }

  constructor(private UserService : UserService , private router : Router){

  }
  login(){
    const user = this.UserService.getUser();

    if(user?.email == this.user.email && user?.password == this?.user.password)
    {
      return location.href = "/home";
    }
    return (this.erreur = "Email ou mot de passe incorrect !")
  }



}
