interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person): string {
  return 'Hello ' + person.firstName + person.lastName;
}

let user: Person = {
  firstName: 'sun',
  lastName: 'yonggang'
};
console.log(greeter(user));
