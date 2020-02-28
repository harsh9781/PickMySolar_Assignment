import { Component, OnInit } from '@angular/core';
import{ FormControl} from '@angular/forms';
import{FormGroup} from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public regService:RegisterService) { }
   userform = new FormGroup({
     username: new FormControl(),
     password: new FormControl(),
   })

  ngOnInit() {
    
  }
  submit(){
    this.regService.login(this.userform.value)
  }
}
