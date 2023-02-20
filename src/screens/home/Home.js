import React from 'react';
import io from 'socket.io-client';
import { socketURL } from '../../constants/uri';

const Home = () => {
  const socket = io(socketURL);

  socket.on('online', (data) => {
    console.log(data);
  });

  return <div>Anasayfa</div>;
};

export default Home;
