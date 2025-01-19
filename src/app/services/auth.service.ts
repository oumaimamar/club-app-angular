import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public users:any ={
  0:{password:'', role: ['USER,ADMIN']},
  1:{password:'', role: ['USER']},

}
  constructor() { }


  public login(username: string, password: string):boolean {
  if(this.users[username] && this.users[username]['password']==password){
    return true
  }else{
    return false;
  }

  }
}
