// TypeScript'te generics, fonksiyonlar, sınıflar ve arayüzler (interface) için yeniden kullanılabilir bileşenler oluşturmanıza olanak tanır. Generics, bileşenlerin türü parametre olarak almasını sağlar, bu da bileşenlerin türden bağımsız olarak çalışabilmesini sağlar.

// Generic Fonksiyonlar
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>('Hello');
let output2 = identity<number>(5);

// Generic Interface
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity2;

console.log(myIdentity(10)); // 10

// Example
interface GenericType<T> {
  name: string;
  age: number;
  salary: T[];
}

const obj1: GenericType<string> = {
  name: 'Alaiddin',
  age: 21,
  salary: ['10000', '20000', '30000'],
};

const obj2: GenericType<string> = {
  name: 'Ahmet',
  age: 20,
  salary: ['20000', '40000', '60000'],
};

const array: GenericType<string | number>[] = [obj1, obj2];

function print<T>(array: GenericType<T>[]): void {
  array.forEach((value: GenericType<T>) => console.log(value));
}

print(array);

const Generic = () => {
  return <div>Generic</div>;
};

export default Generic;
