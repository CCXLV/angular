import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ParentUser {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email: string;
}

export interface ChildUser {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email: string;
}

const childUsers: ChildUser[] = [
  {
    id: 2, firstName: '123', lastName: '456', dateOfBirth: new Date(), phoneNumber: '+995', email: 'email'
  },
  {
    id: 3, firstName: 'asdasd', lastName: 'asfvz', dateOfBirth: new Date(), phoneNumber: '+995', email: 'email2'
  }
]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() parentUsers: ParentUser[] = [];

  childUsers = childUsers;

  @Output() usersList = new EventEmitter<ParentUser[]>();

  emitUsers() {
    this.usersList.emit(this.childUsers);
  }
}
