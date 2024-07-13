//Partial: TypeScript'te Partial<T> türü, T türündeki tüm özellikleri opsiyonel hale getiren yardımcı bir türdür. Bu, mevcut bir türün sadece bir kısmını kullanmak istediğinizde oldukça kullanışlıdır. Partial türü, nesnelerin belirli özelliklerinin eksik olabileceği durumlarda kullanılabilir.

interface User {
  name: string;
  age: number;
  firstName: string;
  lastName: string;
  birthDate: string;
}

const user: Partial<User> = {
  name: 'Alaiddin',
  age: 21,
};

//Required: TypeScript'te Required<T> türü, T türündeki tüm özellikleri zorunlu hale getiren yardımcı bir türdür. Bu, özellikle bir türde bazı özelliklerin zorunlu olmasını istediğiniz durumlarda kullanışlıdır. Required türü, Partial türünün tam tersidir.

//Readonly: TypeScript'te Readonly<T> türü, T türündeki tüm özellikleri salt okunur hale getiren yardımcı bir türdür. Bu, özellikle bir nesnenin özelliklerinin değiştirilmemesi gereken durumlarda kullanışlıdır. Readonly türü, nesnelerin belirli özelliklerinin yalnızca okunabilir olmasını sağlayarak, bu özelliklerin değiştirilmesini önler.

interface User2 {
  id: number;
  name: string;
  email: string;
}

const user2: Readonly<User2> = {
  id: 1,
  name: 'Alaiddin',
  email: 'alaiddin@example.com',
};

// Hata: 'id' özelliği salt okunur olduğu için değiştirilemez
// user2.id = 2;

// Hata: 'name' özelliği salt okunur olduğu için değiştirilemez
// user2.name = "New Name";

console.log(user2); // { id: 1, name: "Alaiddin", email: "alaiddin@example.com" }

//Pick: TypeScript'te Pick<T, K> yardımcı türü, T türünden belirli özellikleri seçmek için kullanılır. Bu, daha büyük bir türün yalnızca belirli alt özelliklerini kullanmak istediğinizde oldukça kullanışlıdır. Pick türü, yeni bir tür oluşturmanıza olanak tanır ve bu tür yalnızca seçtiğiniz özellikleri içerir.

interface User3 {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserPreview = Pick<User3, 'id' | 'name'>;

const user3: UserPreview = {
  id: 1,
  name: 'Alaiddin',
  // 'email' ve 'age' özellikleri burada olamaz
};

// Hata
// const invalidUser: UserPreview = { id: 1, name: "Alaiddin", email: "alaiddin@example.com", age: 30 };

console.log(user3); // { id: 1, name: "Alaiddin" }

//Omit: TypeScript'te Omit<T, K> yardımcı türü, T türünden belirli özellikleri çıkararak yeni bir tür oluşturmanızı sağlar. Bu, bir türde bazı özelliklerin olmaması gerektiğinde veya bir türden belirli özellikleri çıkarmak istediğinizde oldukça kullanışlıdır.

// Bir API yanıtında belirli alanları hariç tutmak için Omit kullanabilirsiniz:

interface ApiResponse {
  status: number;
  message: string;
  data: any;
  timestamp: string;
}

type ApiResponseWithoutData = Omit<ApiResponse, 'data'>;

const response: ApiResponseWithoutData = {
  status: 200,
  message: 'Success',
  timestamp: '2024-07-12T12:34:56Z',
  // 'data' özelliği burada olamaz
};

console.log(response); // { status: 200, message: "Success", timestamp: "2024-07-12T12:34:56Z" }

// Bir formdaki belirli alanları hariç tutmak için Omit kullanabilirsiniz:

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type RegistrationValues = Omit<FormValues, 'confirmPassword'>;

const registrationData: RegistrationValues = {
  username: 'user1',
  email: 'user1@example.com',
  password: 'password123',
  // 'confirmPassword' özelliği burada olamaz
};

console.log(registrationData); // { username: "user1", email: "user1@example.com", password: "password123" }

// Omit türü, daha karmaşık yapılar oluşturmak için de kullanılabilir. Örneğin, Omit ve Partial türlerini birlikte kullanabilirsiniz:

interface User4 {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
}

type PartialUserInfoWithoutPassword = Partial<Omit<User4, 'password'>>;

const partialInfo: PartialUserInfoWithoutPassword = {
  name: 'Alaiddin',
  email: 'alaiddin@example.com',
  // 'id', 'age' ve 'password' özellikleri burada opsiyonel hale gelir
};

console.log(partialInfo); // { name: "Alaiddin", email: "alaiddin@example.com" }

const OtherFeatures = () => {
  return <div>OtherFeatures</div>;
};

export default OtherFeatures;
