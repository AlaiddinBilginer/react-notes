// TypeScript, JavaScript'e türetilmiş bir dil olarak düşünülebilir. JavaScript kodunun üzerine inşa edilmiş olan TypeScript, JavaScript ile uyumlu olduğu gibi, statik tür kontrolü gibi ek özellikler sunar.

import FunctionTypes from './FunctionTypes';
import InterfaceAndType from './InterfaceAndType';

function App() {
  // TypeScript'de any kelimesi, bir değişkenin herhangi bir türde değer alabileceğini belirtmek için kullanılır. Bu, TypeScript'in size sağladığı katı tip güvenliğinden vazgeçmek anlamına gelir.
  let anyValue: any = 10;
  anyValue = 'a';

  // Union Type: Bir değişkenin farklı türlerden birine sahip olabileceğini belirtmenin bir yoludur. Bu, değişkenin değerinin birden fazla olası türden biri olabileceğini size ve TypeScript'e bildirir.
  let unionValue: number | boolean = true;

  // TypeScript'de literal type, bir değişkenin tam olarak belirli bir değere sahip olabileceğini ifade eder. Bu, değişkenin yalnızca belirtilen değerlerden birini alabileceğini size ve TypeScript'e bildir
  let status: 'approved' | 'rejected' | 'pending' | 'loading';

  // Array
  let nums: number[] = [1, 2, 3];
  let names: Array<string> = ['a', 'b', 'c'];
  let mix: (number | string | boolean)[] = ['a', 1, 'b', 2, false];
  let mix2: Array<number | string> = [1, 2, 'a'];

  return (
    <>
      <InterfaceAndType />
      <FunctionTypes />
    </>
  );
}

export default App;
