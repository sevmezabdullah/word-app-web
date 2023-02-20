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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsersStat } from '../../redux/slicer/users';
import Select from 'react-select';
import { options } from '../../constants/years';
const sumData = (data) => {
  let result = 0;

  data.forEach((month) => {
    result += month;
  });
  return result;
};

const Home = () => {
  const socket = io(socketURL);
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const stats = useSelector((state) => state.users.stats) || {};

  socket.on('online', (data) => {
    console.log(data);
  });

  useEffect(() => {
    dispatch(getUsersStat(selectedYear));
  }, [dispatch, selectedYear]);

  let statsValues = Object.values(stats);

  const data = [
    { name: 'Ocak', kullanıcı: stats.january, pv: 2400, amt: 2400 },
    { name: 'Şubat', kullanıcı: stats.february, pv: 2400, amt: 2400 },
    { name: 'Mart', kullanıcı: stats.march, pv: 2400, amt: 2400 },
    { name: 'Nisan', kullanıcı: stats.april, pv: 2400, amt: 2400 },
    { name: 'Mayıs', kullanıcı: stats.may, pv: 2400, amt: 2400 },
    { name: 'Haziran', kullanıcı: stats.june, pv: 2400, amt: 2400 },
    { name: 'Temmuz', kullanıcı: stats.july, pv: 2400, amt: 2400 },
    { name: 'Ağustos', kullanıcı: stats.august, pv: 2400, amt: 2400 },
    { name: 'Eylül', kullanıcı: stats.september, pv: 2400, amt: 2400 },
    { name: 'Ekim', kullanıcı: stats.october, pv: 2400, amt: 2400 },
    { name: 'Kasım', kullanıcı: stats.november, pv: 2400, amt: 2400 },
    { name: 'Aralık', kullanıcı: stats.december, pv: 2400, amt: 2400 },
  ];

  const renderLineChart = (
    <LineChart
      width={800}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="kullanıcı" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="8 8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  const selectChangeHandler = (e) => {
    setSelectedYear(e.value);
  };
  return (
    <div style={{ paddingTop: '20px', padding: '20px' }}>
      <div
        className="card"
        style={{
          width: '850px',

          height: '450px',
        }}
      >
        <div className="card-body">
          <div>
            <h4>Aylık ve Yıllık Bazlı Kullanıcı İstatistikleri</h4>
            <Select
              defaultValue={options[0]}
              options={options}
              onChange={selectChangeHandler}
            />
          </div>
          <hr />
          {renderLineChart}

          <p>
            {selectedYear} yılı toplam kayıt olan kullanıcı sayısı:
            <b>{sumData(statsValues)}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
