import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../redux/slicer/users';
import { Table } from 'antd';
import { format } from 'date-fns';
import UserDetailDialog from '../../components/dialogs/UserDetailDialog';
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
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
    {
      title: 'İşlemler',

      render: (record) => {
        return (
          <div>
            <button
              onClick={() => {
                setIsDetailDialogOpen(true);
                setSelectedUser(record);
              }}
              className="btn btn-success"
            >
              Detay
            </button>
            {selectedUser !== null ? (
              <UserDetailDialog
                isOpen={isDetailDialogOpen}
                user={selectedUser}
                onClose={() => {
                  setIsDetailDialogOpen(false);
                }}
              />
            ) : (
              <div></div>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={users.users}
        rowKey={(record) => record._id}
      />
      <p>
        Toplam <b>{users.count}</b> kullanıcı kayıtlı.
      </p>
    </>
  );
};

export default Users;
