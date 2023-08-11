import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { AdminUser } from './admin-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  private RegUrl = "http://localhost:9001/user/registration";
  private AllUrl = "http://localhost:9001/user/listAll";
  private SearchUrl = "http://localhost:9001/user/get";
  private UpdateUrl = "http://localhost:9001/user/update";
  private DeleteUrl = "http://localhost:9001/user/delete";
  private loginUrl = "http://localhost:9001/user/login";

GetAllUsers()
{
  return this.httpClient.get<User[]>(`${this.AllUrl}`);
}


NewUser(user:User):Observable<Object>
{
  return this.httpClient.post(`${this.RegUrl}`, user);
}

SearchUser(id:number) : Observable<User>
{
  return this.httpClient.get<User>(`${this.SearchUrl}/${id}`);
}

DeleteUser(id:number) : Observable<Object>
{
  return this.httpClient.delete(`${this.DeleteUrl}/${id}`);
}

UpdateUser(id:number, user:User) : Observable<Object>{
  return this.httpClient.put(`${this.UpdateUrl}`, user);
}

loginUser(user : User)
{
  return this.httpClient.post<User>(`${this.loginUrl}`, user);
}

AdminUser:AdminUser = new AdminUser("admin@mail.com", "12345")

loginAdmin(email:string, password:string)  : boolean
  {
    var chk=false;
      if(this.AdminUser.email==email && this.AdminUser.password==password)
      {
        chk = true;
      }
    return chk;
  }

}
