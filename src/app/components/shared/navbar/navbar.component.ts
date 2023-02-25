import { Router } from '@angular/router';
import { UserService } from './../../../services/storage/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 constructor(public userService : UserService,private router : Router){

 }
 logout(){
  this.userService.logout();
  this.router.navigate(["/login"]);
 }
}
