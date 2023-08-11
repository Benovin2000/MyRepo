import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  visibleDiv: number = 1;
  user:User = new User();
  userinfo:User[] = [];
  olduser:User = new User();
  userid : number = 0;
  constructor(private service:UserService, private router:Router, private location: Location) { }
  
  
  ngOnInit(): void {
    this.service.GetAllUsers().subscribe(data=>{
      this.userinfo = data;
    })
    
  }

  register(){
 
    this.service.NewUser(this.user).subscribe(data=>{
      console.log(data);
      this.refreshPage();
    });
  }

  showDiv(divNumber: number) {
    this.visibleDiv = divNumber;
  }

  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload();
  }

  ShowUpdateUser(id:number)
  {
    this.userid = id;
    this.service.SearchUser(this.userid).subscribe(data=>{
      this.olduser= data;
      console.log(this.userid);
    })
  }

  UpdateUser(){
    this.service.UpdateUser(this.userid, this.olduser).subscribe(data=>{
      this.refreshPage();
    })
  }

  DeleteUser(id:number)
    {
      if (window.confirm('Are you sure you want to delete this user?'))
      this.service.DeleteUser(id).subscribe(data=>{
        this.refreshPage();
      });
    }

}
