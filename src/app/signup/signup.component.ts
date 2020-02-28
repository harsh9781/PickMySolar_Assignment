import { Component, OnInit } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { RegisterService } from '../register.service';
import{ FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public abcd:RegisterService ) { }
   
    userform = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })
 
  newuser()
  {
      this.abcd.registeruser(this.userform.value);

  }
            
         

  ngOnInit() {
  }

}
