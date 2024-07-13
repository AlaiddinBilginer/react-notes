function greet(message: string): string {
  return `${message}`;
}

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: 'Alaiddin',
  age: 21,
};

const user2: User = {
  name: 'Ali',
  age: 20,
};

const userArray: User[] = [user1, user2];

const printUsers = (array: User[]): void => {
  array.forEach((user: User) => console.log(user.name + ' ' + user.age));
};

printUsers(userArray);

const FunctionTypes = () => {
  return <div>{greet('Merhaba')}</div>;
};

export default FunctionTypes;
