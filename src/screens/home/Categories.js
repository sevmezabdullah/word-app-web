import React, { useState } from 'react';
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
import AddCategoryDialog from '../../components/dialogs/AddCategoryDialog';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const columns = [
    {
      title: 'Ödül ID',
      dataIndex: 'awardId',
      key: 'awardIds',
      width: 30,
    },
    {
      title: 'Resim',
      dataIndex: 'logo',
      key: 'logo',
      width: 80,
      render: (record) => {
        return (
          <div>
            <img
              style={{ width: '80px', height: '80px' }}
              src={record}
              alt=""
            />
          </div>
        );
      },
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
        const codes = [];
        const meanings = [];
        record.forEach((item) => {
          codes.push(item.langCode);
          meanings.push(item.meaning);
        });

        return <SupportedLanList langCodes={codes} meanings={meanings} />;
      },
    },
    {
      title: 'Kelimeler',
      dataIndex: 'words',
      key: 'words',
      width: 60,
      render: (record) => {
        return <IncludesWords words={record} />;
      },
    },
    {
      title: 'İşlemler',
      width: 150,
      render: (record) => {
        return (
          <div>
            <button className="btn btn-success" style={{ marginRight: 10 }}>
              Kelime Ekle
            </button>
            <button className="btn btn-warning" style={{ marginRight: 10 }}>
              Düzenle
            </button>
            <button
              onClick={() => {
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
  if (categories !== null) {
    return (
      <>
        <Table
          columns={columns}
          dataSource={categories}
          rowKey={(record) => record._id}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            Toplam <b>{categories.length}</b> kategori kayıtlı.
          </p>
          <button
            onClick={(e) => {
              setAddDialogOpen(true);
              e.preventDefault();
            }}
            className="btn btn-success"
            style={{ padding: 10, margin: 10 }}
          >
            Kategori Oluştur
          </button>
        </div>
        <AddCategoryDialog
          isOpen={addDialogOpen}
          onClose={() => {
            setAddDialogOpen(false);
          }}
        />
      </>
    );
  }
};

export default Categories;
