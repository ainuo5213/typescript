interface Person {
  firstName: string
  lastName: string
}

class User {
  public fullName: string;
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + this.lastName;
  }
}

function greeter(person: Person): string {
  return 'Hello ' + person.firstName + person.lastName;
}
// 由于User类含有firstname和lastname，所以能够和接口完美兼容
let user: User = new User('sun', 'yonggang');
console.log(greeter(user));
