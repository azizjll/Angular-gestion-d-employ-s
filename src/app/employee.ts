export class Employee {
  id: number;
  firstname: string;
  lastname: string;
  emailId: string;

  constructor(id: number = 0, firstname: string = '', lastname: string = '', emailId: string = '') {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.emailId = emailId;
  }
}
