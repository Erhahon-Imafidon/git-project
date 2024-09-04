let variable = 'hello';
variable = 'world';

let age = 18;

age = 19;

let testString: string;
testString = 'maximillian';

let testBoolean: boolean;
testBoolean = true;

let testStringOrNumber: string | number;

testStringOrNumber = 5;

let testStingOrBoolean: string | boolean;

let testStringArray: string[];

let userObj: {
  name: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  name: 'max',
  age: 18,
  isAdmin: true,
};

// Conditionally add properties that is not a must that it should be there
let userObj2: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

// ANY Type
let testAny: any;
let testAnyArray: any[];

// Functions
const letSayhi = () => {
  // Not returning any specific anyhting
  console.log('hi');
};

// Function without Arguments
const returnString = (): string => {
  return 'hello';
};

// Function with Arguments
let add = (a: number, b: number): number => {
  // Takes a number type and return a number
  return a + b;
};

// Using Type Aliases
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunction = (user: UserType) => {
  console.log(user.username);
};

// Function Signature

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + 'times' + str);
};

// Giving optional type
type userObj2 = {
  name: string;
  age: number;
  phone?: string;
  theme: 'dark' | 'light';
};

const userWithTheme: userObj2 = {
  name: 'Imogen',
  age: 18,
  theme: 'light',
};

// INTERFACES
interface IUser {
  username: string;
  age: number;
  email: string;
  phone?: string;
}

// Extending Interfaces
interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: 'Tom',
  age: 30,
  email: 'tom@gmail.com',
  employeeId: 123,
};

const client: IUser = {
  username: 'Tom',
  age: 30,
  email: 'tom@gmail.com',
};

// GENERICS
interface IArthur {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IArthur[] | ICategory[];
}

// If I don't know what type of data I will get
interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: 'post title',
  desc: 'post description',
  extra: ['hello', 'world'],
};

// Adding limitations to the generic
interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<IArthur | ICategory> = {
  id: 1,
  title: 'post title',
  desc: 'post description',
  extra: [{ id: 1, username: 'hello', title: 'world' }],
};
