import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-innerpage2',
  templateUrl: './innerpage2.component.html',
  styleUrls: ['./innerpage2.component.css']
})
export class Innerpage2Component implements OnInit {

  

  ngOnInit() {
  }

  users = [
    {
      "id": 1,
      "name": "Risav Harsh",
      "username": "Harsh9781",
      "email": "Harsh9781@gmail.com",
      "phone":"678756454",

      "address": {
        "street": "Babu khan Lane",
        "city": "GHyderabdwenborough",
        "zipcode": "500032",
                 },
    },
    {
      "id": 2,
      "name": "Abhishek Kumar",
      "username": "Abhishek123",
      "email": "Abhishek123@gmail.com",
      "phone":"887765634",

      "address": {
        "street": "Town Thana Road",
        "city": "Allahabad",
        "zipcode": "90056",
                 },
    },
    {
      "id": 3,
      "name": "Sneha Pandey",
      "username": "snehapandey.53",
      "email": "snehapandey.53@gmail.com",
      "phone":"8249929853",
      "address": {
        "street": "Hinoo market",
        "city": "Ranchi",
        "zipcode": "58964",
                },
    },
    {
      "id": 4,
      "name": "Prateek Adarsh",
      "username": "Prateek123",
      "email": "Prateek123@gmail.com",
      "phone":"9939676136",
      "address": {
        "street": "Gudri bazar",
        "city": "Hajipur",
        "zipcode": "844101",
                 },
    },
    {
      "id": 5,
      "name": "Himanshu Shekhar",
      "username": "Himansh712",
      "email": "Himansh712@gmail.com",
      "phone":"9939676856",

      "address": {
        "street": "Gudari bazar",
        "city": "Hajipur city",
        "zipcode": "844102",
      
                 },
    
    },
  ]
  }
  


