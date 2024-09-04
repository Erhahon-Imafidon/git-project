function greeter(person: string) {
  return 'Hello, ' + person;
}

let user = 'Jane User';

document.body.textContent = greeter(user);

interface Person {
  firstName: string;
  lastName: string;
}

function greeterTwo(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let userTwo = { firstName: 'Jane', lastName: 'User' };

document.body.textContent = greeterTwo(userTwo);

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

let userThree = new Student('Jane', 'M.', 'User');

document.body.textContent = greeterTwo(userThree);
