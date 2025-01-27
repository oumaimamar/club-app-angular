import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public users:any ={
  admin : {password:'', roles: ['USER,ADMIN']},
  user : {password:'', roles: ['USER']},

}

//System Authen garde les Information
public username: any;
public isAuthenticated: boolean = false;
public role: string[]=[];

  constructor(private router:Router) { }


  public login(username: string, password: string):boolean {
  if(this.users[username] && this.users[username]['password']==password){
    this.username=username;
    this.isAuthenticated = true;
    this.role= this.users[username]['roles'];
    return true
  }else{
    return false;
  }

  }

  logout() {
    this.isAuthenticated = false;
    this.role=[];
    this.username=undefined;
    this.router.navigateByUrl('/login');
  }
}
