import React from 'react';
import io from 'socket.io-client';
import { socketURL } from '../../constants/uri';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
const data = [
  { name: 'Ocak', uv: 800, pv: 2400, amt: 2400 },
  { name: 'Şubat', uv: 600, pv: 2400, amt: 2400 },
  { name: 'Mart', uv: 900, pv: 2400, amt: 2400 },
  { name: 'Nisan', uv: 900, pv: 2400, amt: 2400 },
  { name: 'Mayıs', uv: 1100, pv: 2400, amt: 2400 },
  { name: 'Haziran', uv: 1, pv: 2400, amt: 2400 },
  { name: 'Temmuz', uv: 600, pv: 2400, amt: 2400 },
  { name: 'Ağustos', uv: 500, pv: 2400, amt: 2400 },
  { name: 'Eylül', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Ekim', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Kasım', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Aralık', uv: 455, pv: 2400, amt: 2400 },
];
const Home = () => {
  const socket = io(socketURL);

  socket.on('online', (data) => {
    console.log(data);
  });

  const renderLineChart = (
    <LineChart
      width={800}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="8 8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <div style={{ paddingTop: '20px', padding: '20px' }}>
      <div
        className="card"
        style={{
          width: '850px',

          height: '400px',
        }}
      >
        <div className="card-body">
          <h4>Aylık ve Yıllık Bazlı Kullanıcı İstatistikleri</h4>
          <hr />
          {renderLineChart}
        </div>
      </div>
    </div>
  );
};

export default Home;
