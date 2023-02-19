import React from 'react';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategory,
  deleteCategoryById,
} from '../../redux/slicer/category';
import { Table } from 'antd';
import SupportedLanList from '../../components/ui/SupportedLanList';
import IncludesWords from '../../components/ui/IncludesWords';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const columns = [
    {
      title: 'Ödül ID',
      dataIndex: 'awardId',
      key: 'awardIds',
      width: 30,
    },
    {
      title: 'Kelime Sayısı',
      dataIndex: 'words',
      key: 'words',
      width: 100,
      render: (record) => {
        return (
          <div style={{ height: '10px', width: '50px' }}>
            <p>{record.length}</p>
          </div>
        );
      },
    },
    {
      title: 'Oluşturulma Tarihi',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 100,
      render: (record) => {
        const date = new Date(record);
        const formattedDate = format(date, 'dd/MM/yyyy hh:ss a');
        return <p>{formattedDate}</p>;
      },
    },

    {
      title: 'Desteklenen Diller',
      dataIndex: 'titles',
      key: 'titles',
      width: 80,
      render: (record) => {
        const langCodes = Object.keys(record);
        return <SupportedLanList langCodes={langCodes} />;
      },
    },
    {
      title: 'Kelimeler',
      dataIndex: 'words',
      key: 'words',
      width: 50,
      render: (record) => {
        return <IncludesWords words={record} />;
      },
    },
    {
      title: 'İşlemler',
      width: 50,
      render: (record) => {
        return (
          <div>
            <button className="btn btn-warning" style={{ marginRight: 10 }}>
              Düzenle
            </button>
            <button
              onClick={() => {
                console.log('Data');
                dispatch(deleteCategoryById(record._id));
              }}
              className="btn btn-danger"
            >
              Sil
            </button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <>
      <Table
        columns={columns}
        dataSource={categories}
        rowKey={(record) => record._id}
      />
    </>
  );
};

export default Categories;
