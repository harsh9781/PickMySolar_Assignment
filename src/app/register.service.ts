import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public router:Router) { }
   
   users=[];
   registeruser(user)
   {
    this.users.push(user);
    console.log(this.users); 
   }
   login(user){
      console.log(user);
      console.log(this.users);
      var c =0;
    for(var i=0;i<=this.users.length-1;i++){
      if(this.users[i].username==user.username){
        if(this.users[i].password==user.password){
          window.localStorage.setItem('login','true');
          c=1;
        }
      }
    }
    if(c==1){
      this.router.navigate(['/innerpage1'])
    }
    else{
      alert("wrong input");
      this.router.navigate(['/login'])
    }
   }
}
