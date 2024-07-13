// Interface'ler genellikle nesnelerin şekillerini tanımlamak için kullanılır.

interface Person {
  name: string;
  age: number;
  address?: string; // ? => Optional Type
}

const person: Person = {
  name: 'Alaiddin',
  age: 21,
};

// Interface'ler başka interface'leri genişletebilir
interface Employee extends Person {
  salary: number;
}

const employee: Employee = {
  name: 'Alaiddin',
  age: 21,
  salary: 20000,
};

// Type'lar da nesnelerin şekillerini tanımlamak için kullanılabilir, ancak daha esneklerdir ve birleşim, kesişim gibi daha karmaşık türleri tanımlamak için kullanılabilirler.
type Animal = {
  name: string;
  age: number;
};

type Dog = Animal & {
  breed: string;
};

const myDog: Dog = {
  name: 'Rex',
  age: 5,
  breed: 'Golden Retriever',
};

const InterfaceAndType = () => {
  return (
    <div>
      <p>
        {person.name} {person.age}
      </p>

      <p>
        {myDog.name} {myDog.age} {myDog.breed}
      </p>
    </div>
  );
};

export default InterfaceAndType;
