import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// json-server paketi fake api oluşturmak için kullandığımız bir pakettir.
// npm install -g json-server
// json-server --watch ./src/db.json --port 3000

// Axios, HTTP istekleri yapmak için kullanılan, promise tabanlı bir JavaScript kütüphanesidir. React uygulamalarında Axios, API'lara GET, POST, PUT, DELETE gibi istekler göndermek için yaygın olarak kullanılır. Axios'un kullanımı, fetch API'ye göre daha basit ve güçlü özellikler sunar.

const URL = 'http://localhost:3000';

function App() {
  // GET
  const getAllPlayers = async () => {
    const response = await axios.get(`${URL}/players`);
    console.log(response.data);
  };

  const getById = async (id) => {
    const response = await axios.get(`${URL}/players/${id}`);
    console.log(response.data);
    return response.data;
  };

  // POST
  const createPlayer = async (newPlayer) => {
    const response = await axios.post(`${URL}/players`, newPlayer);
    console.log(response);
  };

  // PUT
  const updatePlayer = async (id, player) => {
    await axios.put(`${URL}/players/${id}`, player);
  };

  // DELETE
  const deletePlayer = async (id) => {
    await axios.delete(`${URL}/players/${id}`);
  };

  // ASYNC & AWAİT EXAMPLE
  // async ve await, JavaScript'te asenkron işlemleri yönetmek ve daha okunabilir ve yönetilebilir kod yazmak için kullanılan iki anahtar kelimedir. Bu kavramlar, özellikle modern JavaScript uygulamalarında, asenkron işlemleri senkron bir yapıda yazmamıza olanak tanır.
  const getPostById = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response;
  };

  const getPost = async () => {
    const user = await getById(1);
    const post = await getPostById(user.postId);
    console.log(post.data);
  };

  useEffect(() => {
    // getAllPlayers();
    // getById(2);

    // createPlayer({ name: 'Arda Güler', age: 19, image: 'https://img.a.transfermarkt.technology/portrait/big/861410-1699472585.jpg?lm=1' });

    // updatePlayer('2', {
    //   name: 'Michy Batshuayi',
    //   age: 30,
    //   image: 'https://img.a.transfermarkt.technology/portrait/big/179184-1696447598.png?lm=1',
    // });

    // deletePlayer(3);

    getPost();
  }, []);

  return <></>;
}

export default App;
