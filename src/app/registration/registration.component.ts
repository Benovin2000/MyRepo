import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private UsrService:UserService, private router:Router) { }
  user:User = new User();
  msg:string = "";
  
 register(){
 
      this.UsrService.NewUser(this.user).subscribe(data=>{
        console.log(data);
        //alert("New Employee is Added Successfully...");
        this.router.navigate(['login']);
      });
    }

  }


