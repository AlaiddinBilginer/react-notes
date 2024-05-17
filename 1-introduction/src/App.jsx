function App() {
  // JavaScript Codes

  let age = 21;

  const names = ['Alaiddin', 'Ali', 'Aykut', 'Ayşe'];

  return (
    // HTML Codes

    // JSX: HTML kodlarının JavaScript'te yazılmasını ve JavaScript kodlarına entegre edilmesini sağlar. JSX, React bileşenlerini oluştururken daha okunabilir bir yapı sağlar. JSX = HTML + JavaScript
    <>
      <p>
        Alaiddin is {age} {/* JSX */}.
      </p>

      {age > 18 ? <h2>You can join.</h2> : <h2>You have to be over 18</h2>}

      {/* <p>Names: {names}</p> */}

      {names.map((name, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'orange',
            marginBottom: '0.5rem',
            border: '1px dotted black',
            padding: '1rem',
          }}
        >
          {name} -- index: {index}
        </div>
      ))}
    </>
  );
}

export default App;
