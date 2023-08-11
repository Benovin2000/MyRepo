import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user : User = new User();
  res:any;
  msg:any;
  uname:string = "";
  pwd:string = "";
  showDiv1 = true;

  constructor(private service : UserService,  private route : Router) { }
  
  login() {
  
    try {
    
      this.service.loginUser(this.user).subscribe(data=>{
        this.res = data;
        console.log(this.res);
        if (this.res.name != null)
      {
      

      localStorage.setItem('userEmail', this.res.email);

      localStorage.setItem('userID', String(this.res.id));

      localStorage.setItem('userName', this.res.name);

      this.route.navigate(['/adminhome/manage']);

      const userEmail = localStorage.getItem('userEmail');
      console.log('User Email:', userEmail);
      }
      else
      this.msg = "Invalid password";
      },
      error=>{
        console.log(error);
      });
    }
    catch (error) {
      console.log('Error occurred during login:', error);
    }
  }

  adminlogin()
  {
    if(this.service.loginAdmin(this.uname, this.pwd)==true)
    this.route.navigate(['/adminhome']);
      else
        this.msg = "Invalid username/password";
  }

  toggleadmin() {
    this.showDiv1 = !this.showDiv1;
  }

}
