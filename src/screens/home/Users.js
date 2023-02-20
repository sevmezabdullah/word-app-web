import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../redux/slicer/users';
import { Table } from 'antd';
import { format } from 'date-fns';
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Ad',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Soyad',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Ana Dili',
      dataIndex: 'nativeLang',
      key: 'nativeLang',
      render: (record) => {
        if (!record) {
          return <p>Ana dil seçimi yapılmamış</p>;
        } else {
          return <p>{record}</p>;
        }
      },
    },
    {
      title: 'Hedef Dili',
      dataIndex: 'currentLang',
      key: 'currentLang',
      render: (record) => {
        if (!record) {
          return <p>Hedef dil seçimi yapılmamış</p>;
        } else {
          return <p>{record}</p>;
        }
      },
    },
    {
      title: 'Seviye',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Onay Durumu',
      dataIndex: 'isVerify',
      key: 'isVerify',
      render: (record) => {
        if (record) {
          return <p>Onaylı</p>;
        } else {
          return <p>Onay Bekleniyor</p>;
        }
      },
    },

    {
      title: 'Kayıt Tarihi',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (record) => {
        const date = new Date(record);
        const formattedDate = format(date, 'dd/MM/yyyy hh:ss a');
        return <p>{formattedDate}</p>;
      },
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={users.users} />
      <p>
        Toplam <b>{users.count}</b> kullanıcı kayıtlı.
      </p>
    </>
  );
};

export default Users;
