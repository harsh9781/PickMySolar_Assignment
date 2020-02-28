import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ FormControl} from '@angular/forms';
import{FormGroup} from '@angular/forms';
@Component({
  selector: 'app-innerpage1',
  templateUrl: './innerpage1.component.html',
  styleUrls: ['./innerpage1.component.css']
})
export class Innerpage1Component implements OnInit {

  students;
  cid;
  fn;
  ln
  age;
  url="https://api.mlab.com/api/1/databases/chandana/collections/students?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";

  
  constructor( public http:HttpClient) { }

  
   
  addStudent()
  {
     var obj:any={}
     obj.firstname=this.fn;
     obj.lastname= this.ln;
     obj.age= this.age;
     this.http.post(this.url,obj)
     .subscribe((res)=>{
     console.log(res);
     this.getstudent();
     })
        
      
  }

  deletestudent(id){
    this.http.delete("https://api.mlab.com/api/1/databases/chandana/collections/students/"+id+"?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
    .subscribe((res)=>{
      console.log(res);
      this.getstudent();
    })
  }

  updateStudent(){
    var obj:any = {};
   obj.firstname=this.fn;
   obj.lastname=this.ln;
   obj.age = this.age;
   this.http.put("https://api.mlab.com/api/1/databases/chandana/collections/students/"+this.cid+"?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz",obj)
   .subscribe((res)=>{
     console.log(res);
     this.getstudent();
   })
 }
  getstudent()
  {
       this.http.get(this.url).subscribe((res)=>{
             
        this.students=res;

       })
  }
  edit(student){
    this.fn=student.firstname;
    this.ln=student.lastname;
    this.age=student.age;
    this.cid = student._id.$oid;
  }
  ngOnInit() {
  }

}
