function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Jane User';
document.body.textContent = greeter(user);
function greeterTwo(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var userTwo = { firstName: 'Jane', lastName: 'User' };
document.body.textContent = greeterTwo(userTwo);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
var userThree = new Student('Jane', 'M.', 'User');
document.body.textContent = greeterTwo(userThree);
