import React from 'react';

// export anahtar kelimesi ile bir modülden birden fazla öğe dışa aktarılabilir. Bu öğeler fonksiyonlar, değişkenler, sınıflar vb. olabilir.
export const users = [
  {
    name: 'abc',
    email: 'abc@gmail.com',
    password: '123',
  },
  {
    name: 'def',
    email: 'def@gmail.com',
    password: '456',
  },
];

function Login() {
  return (
    <>
      {/* fragment(<></>): React Fragment, React'te birden fazla öğeyi gruplamak için kullanılan bir bileşendir. Bir bileşende döndürülen elemanlar tek bir kök öğeye (parent) sahip olmalıdır. Bu gerekliliği karşılamak için genellikle ekstra bir <div> kullanılır, ancak bu gereksiz bir DOM düğümü ekler. React Fragment, ekstra bir düğüm eklemeden bu sorunu çözmek için kullanılır. */}

      <h2>Login Component</h2>
    </>
  );
}

// export default: Bir modülden tek bir varsayılan öğe dışa aktarmak için kullanılır.
export default Login;
