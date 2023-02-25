import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class StorageService {

  constructor(){

  }

  get(key : string) {
    return localStorage.getItem(key);
  }

  set(parametre : Required<{key : string , value : any}>) {
    localStorage.setItem(parametre.key, parametre.value);
  }

  delete(key : string ) {
    localStorage.removeItem(key);
  }
}
