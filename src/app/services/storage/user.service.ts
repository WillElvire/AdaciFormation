import { environment } from 'src/app/environment/dev';
import { StorageService } from './storage.service';
import { IUser } from "src/app/interfaces/user";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn :'root'
})
export class UserService {

  User ?: IUser;

  constructor(private storageService : StorageService ){
    this.User = JSON.parse(this.storageService.get(environment.ADACIKEY) as string);
  }

  logout(){
    this.storageService.delete(environment.ADACIKEY);
  }

  isConnected() : boolean {
    return !!this.User;
  }

  getUser() : IUser{
   return this.User as IUser;
  }
}
