import './App.css';

// export default olarak dışarıya aktardığımız componenti import ediyoruz.
import Login from './Login';

// export
import { users } from './Login';

function App() {
  return (
    <>
      <div>App</div>
      <Login />

      <p>
        {users[0].name} - {users[0].email}
      </p>
    </>
  );
}

export default App;
