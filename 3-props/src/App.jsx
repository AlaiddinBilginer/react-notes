import './App.css';
import Container from './Container';
import Product from './Product';

function App() {
  const product = [
    {
      name: 'Computer',
      price: 25000,
    },
    {
      name: 'Keyboard',
      price: 1500,
    },
  ];

  return (
    <>
      {/* Component içerisinde component kullanabiliyoruz. Children componentinden burada içerisine girdiğimiz Product componentine ulaşmak için children propsunu tanımlıyoruz.*/}
      <Container>
        <Product product={product} />
      </Container>
    </>
  );
}

export default App;
