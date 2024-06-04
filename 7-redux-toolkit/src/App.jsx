import Counter from './Counter';
import UserList from './UserList';

function App() {
  // npm install @reduxjs/toolkit react-redux
  // Redux, React uygulamalarında global durum yönetimini kolaylaştırmak amacıyla kullanılan bir kütüphanedir.
  // Redux Toolkit, Redux ile birlikte kullanılmak üzere geliştirilen ve daha hızlı, daha kolay ve daha az hata yaparak Redux uygulamaları geliştirmeyi amaçlayan bir araç setidir.
  return (
    <>
      <h1>App</h1>
      <Counter />
      <UserList />
    </>
  );
}

export default App;
