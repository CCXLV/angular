import { Component } from '@angular/core';
import { ParentUser, ChildUser } from './user/user.component';

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const parentUsers: ParentUser[] = [
  {
    id: 0, firstName: '123', lastName: '456', dateOfBirth: new Date(), phoneNumber: '+995', email: 'email'
  },
  {
    id: 1, firstName: 'asdasd', lastName: 'asfvz', dateOfBirth: new Date(), phoneNumber: '+995', email: 'email2'
  }
] 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GIORGI';
  users: User[] = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Smith', age: 18 },
    { firstName: 'Alice', lastName: 'Johnson', age: 22 },
    { firstName: 'Bob', lastName: 'Brown', age: 19 },
    { firstName: 'Charlie', lastName: 'Davis', age: 30 }
  ];
  parentUsers = parentUsers;
  receivedUsers: ChildUser[] = [];

  handleUsers(users: ChildUser[]) {
    this.receivedUsers = users;
  }
}
