import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environment/dev';
import { IUser } from 'src/app/interfaces/user';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  erreur : string = "";
  user : IUser = {
    email : '',
    password : ''
  }

  constructor(private storageServie : StorageService , private router : Router){

  }
  register(){

    const validation = this.emailPattern.test(this.user.email)
    && this.user.password.length > 6;

    if(validation)
    {
      this.storageServie.set({key : environment.ADACIKEY,value : JSON.stringify(this.user)});
      return  this.router.navigate(["/login"]) ;
    }

    return this.erreur = "Veuillez renseigner tout les champs";
  }
}
